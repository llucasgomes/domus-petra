import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Album, Contact, HelpCircle, Hotel, Menu } from 'lucide-react'

export default function MenuMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" border-none focus:outline-none data-[state=open]:bg-transparent">
        <Menu size={36} color="#193d68" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="focus:text-[#849dba]">
          <Hotel strokeWidth="1.5" />
          <DropdownMenuLabel>Home</DropdownMenuLabel>
        </DropdownMenuItem>

        <DropdownMenuItem className="focus:text-[#849dba]">
          <Album strokeWidth="1.5" />
          <DropdownMenuLabel>Blog</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:text-[#849dba]">
          <HelpCircle strokeWidth="1.5" />
          <DropdownMenuLabel>About</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:text-[#849dba]">
          <Contact strokeWidth="1.5" />
          <DropdownMenuLabel>Contato</DropdownMenuLabel>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
