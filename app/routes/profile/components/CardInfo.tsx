import  { useState } from "react";
import { rootUser } from "~/data/users";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { CameraIcon } from "@radix-ui/react-icons";
export function Info() {
  const [formData, setFormData] = useState({
    name: rootUser.name || "",
    email: rootUser.email || "",
    username: rootUser.username || "",
    password: "",
    avatar: rootUser.avatar || "",
  });
  const handleName = (e: string) => {
    setFormData({ ...formData, name: e });
  };
  const handlePassword = (e: string) => {
    setFormData({ ...formData, password: e });
  };
  const handleEmail = (e: string) => {
    setFormData({ ...formData, email: e });
  };
  const handlePhone = (e: string) => {
    setFormData({ ...formData, username: e });
  };
  const formHandler = () => {};
  return (
    <Card className="w-1/2 h-auto border shadow-lg">
      <CardHeader className="text-2xl">Edit your profile</CardHeader>
      <CardContent>
        <form
          onSubmit={formHandler}
          className="flex flex-col space-y-4 bg-gray-50 p-6 rounded-lg"
        >
          <div className="flex justify-center">
            <Label
              htmlFor="avatarInput"
              className="relative inline-block cursor-pointer group"
            >
              <img
                src={formData.avatar}
                alt="avatar"
                className="size-32 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="absolute bottom-1 right-1 bg-black rounded-full p-1.5 shadow-lg">
                <CameraIcon className="text-white w-5 h-5" />
              </div>
            </Label>
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden"
            />

            <Input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
          <div>
            <Label>name</Label>
            <Input
              type="text"
              placeholder="new username"
              value={formData.name}
              onChange={(e) => handleName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>username</Label>
            <Input
              type="text"
              placeholder="new username"
              value={formData.username}
              onChange={(e) => handlePhone(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>password</Label>
            <Input
              type="password"
              placeholder="new password"
              onChange={(e) => handlePassword(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>email</Label>
            <Input
              type="email"
              placeholder="new email"
              value={formData.email}
              onChange={(e) => handleEmail(e.target.value)}
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full">
            submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
