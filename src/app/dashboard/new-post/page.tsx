/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from 'firebase/storage'

import { app } from '@/lib/firebase'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import styles from './new-post.module.css'

export default function Page() {
  const { status } = useSession()

  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [media, setMedia] = useState('')
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')

  useEffect(() => {
    const storage = getStorage(app)
    if (file) {
      const upload = () => {
        const name = new Date().getTime() + file.name
        const storageRef = ref(storage, name)

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused')
                break
              case 'running':
                console.log('Upload is running')
                break
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL)
            })
          }
        )
      }

      file && upload()
    }
  }, [file])

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,

        catSlug: catSlug || 'style' //If not selected, choose the general category
      })
    })
  }

  return (
    <div className="rounded-4xl relative mt-5 flex flex-col p-16">
      <div className={`flex h-[700px] w-full flex-col gap-5 text-white`}>
        <div className={`flex w-full bg-green-300`}>
          <input
            type="file"
            id="image"
            onChange={(e) =>
              e.target.files && e.target.files[0]
                ? setFile(e.target.files[0])
                : setFile(null)
            }
            style={{ display: 'none' }}
            className=""
          />
          <button className={`cursor-pointer`}>
            <label htmlFor="image">
              <Image
                src="/outros/default-image.jpg"
                alt=""
                width={150}
                height={100}
                className="cursor-pointer"
              />
            </label>
          </button>
          <input
            type="text"
            placeholder="Title"
            className="pl-12 text-5xl text-black outline-none placeholder:text-[#b3b3b1]"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="h-full w-full">
          <ReactQuill
            className={`w-full text-black outline-none placeholder:text-[#b3b3b1]`}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publicar
      </button>
    </div>
  )
}
