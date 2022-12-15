import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { House, User, UsersThree } from "phosphor-react"
import MenuItem from "../MenuItem"
import Text from '../../components/Text'
import CreatePostButtom from '../../components/CreatePostButtom'
import CreatePostDialog from '../../components/CreatePostDialog'
import logo_menu from '../../assets/logo_menu.svg'

function Menu() {
    const [open, setOpen] = useState(false)

    function closeDialog() {
        setOpen(false)
    }

    return (
        <div className="basis-1/6 border-r border-slate-400 ml-4 pt-4">
            <div className='flex items-center ml-4'>
                <img src={logo_menu} alt="Logo" />
                <Text className="font-extrabold ml-4">Parrot</Text>
            </div>
            <ul className="pr-2">
                <MenuItem menuTitle='Página Inicial' route="/home">
                    <House size={48} weight="fill" />
                </MenuItem>
                <MenuItem menuTitle='Perfil' route="/profile">
                    <User size={48} weight="fill" />
                </MenuItem>
                <MenuItem menuTitle='Amigos' route="/friends">
                    <UsersThree size={48} weight="fill" />
                </MenuItem >
            </ul >
            <div className='flex flex-col items-center'>
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <CreatePostButtom />
                    <CreatePostDialog closeDialog={closeDialog} />
                </Dialog.Root>
            </div>
        </div>

    );
}

export default Menu