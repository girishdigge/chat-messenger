'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting Start</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>
            Welcome to Chat Messanger
          </DialogTitle>
          <DialogDescription>
            Chat Messanger makes it effortless to create secure chat links and
            start conversations in seconds.
          </DialogDescription>
        </DialogHeader>
        <Button variant='outline'>
          <Image
            src='/images/google.png'
            className='mr-4'
            alt='google logo'
            width={25}
            height={25}
          />
          Continue with Google
        </Button>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' value='Pedro Duarte' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input id='username' value='@peduarte' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default LoginModal;
