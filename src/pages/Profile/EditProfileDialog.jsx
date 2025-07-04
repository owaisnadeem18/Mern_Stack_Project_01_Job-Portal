import { Dialog, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { DialogContent } from '@radix-ui/react-dialog'
import React from 'react'

const EditProfileDialog = ({open , setOpen}) => {

  return (
    <Dialog open={open} >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default EditProfileDialog
