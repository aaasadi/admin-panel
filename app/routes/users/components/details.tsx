// routes/users/component/details.tsx
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {Header} from "./ItemPageHeader";

export interface UserProfileInfo {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: string;
  billing: string;
  joined: string;
  phone?: string;
  role?: string;
  lastLogin?: string;
}

export default function UserProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user as UserProfileInfo;

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    plan: user?.plan || '',
    status: user?.status || '',
    phone: user?.phone || '09123456789',
    role: user?.role || 'Regular User',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  };

  const handleSave = () => {
  };

  const handleRemove = () => {
  };

  if (!user) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <Header props={{data:{ title: `${user.name}`, description:`ID: #${user.id} • Joined ${new Date(user.joined).toLocaleDateString()}` }}} />
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update name, email, role and phone.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" name="role" value={formData.role} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} dir="ltr" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleSave}>Save changes</Button>
          <Button variant="outline" onClick={() => navigate('/users')}>Back</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subscription & Status</CardTitle>
          <CardDescription>Plan, account status and billing info.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="plan">Active plan</Label>
            <Input id="plan" name="plan" value={formData.plan} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Account status</Label>
            <Input id="status" name="status" value={formData.status} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label>Billing status</Label>
            <Input value={user.billing} disabled className="bg-muted" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="destructive" onClick={handleRemove} className="bg-red-600 hover:bg-red-700 text-black">
            Delete user
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}