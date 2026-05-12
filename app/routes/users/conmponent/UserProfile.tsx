import Modal from "react-modal";
import { CameraIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
export interface UserProfileInfo {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: string;
  billing: string;
  joined: string;
}
export function UserProfile({
  isOpen,
  data,
  isClose,
}: {
  isOpen: boolean;
  data?: UserProfileInfo;
  isClose: Function;
}) {
  const handleClose = () => {
    isClose();
  };
  const handleForm = () => {};
   const handleRemove = () => {};
  return (
    <Modal
  isOpen={isOpen}
  onRequestClose={handleClose}
  className="fixed inset-0 flex items-center justify-center z-50"
  overlayClassName="fixed inset-0  bg-opacity-50"
>
  <Card className="w-1/4 h-auto border shadow-lg">
    <CardHeader className="flex justify-between items-start">
  <div>
    <h3 className="text-lg font-semibold">{data?.name}</h3>
    <h5 className="text-sm text-gray-500">#{data?.id}</h5>
  </div>
  <Button onClick={() => isClose(false)} className="p-1 size-10">✕</Button>
</CardHeader>
    <CardContent>
      <form onSubmit={handleForm} className="flex flex-col space-y-4">
        <div>
          <Label className="block mb-1">Name</Label>
          <Input value={data?.name} className="w-full" />
        </div>
        
        <div>
          <Label className="block mb-1">Email</Label>
          <Input value={data?.email} className="w-full" />
        </div>
        
        <div>
          <Label className="block mb-1">Plan</Label>
          <Input value={data?.plan} className="w-full" />
        </div>
        
        <div>
          <Label className="block mb-1">Status</Label>
          <Input value={data?.status} className="w-full" />
        </div>

        <div className="flex gap-2 mt-2">
          <Button type="submit" className="flex-1">
            Submit
          </Button>
          <Button onClick={handleRemove} className="bg-red-700 flex-1">
            Remove
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
</Modal>
  );
}
