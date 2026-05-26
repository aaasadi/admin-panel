import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {  type ContextType } from "./details";
import { useState } from "react";
import { useOutletContext } from "react-router";
export default function UserProfile() {
  const { user } = useOutletContext<ContextType>();
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    plan: user.plan || "",
    status: user.status || "",
    phone: user.phone || "09123456789",
    role: user.role || "Regular User",
  });
  const handleRemove = () => {};
  const handleChange = () => {};
  return (
    <div className="space-y-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Subscription & Status</CardTitle>
          <CardDescription>
            Plan, account status and billing info.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="plan">Active plan</Label>
            <Input
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Account status</Label>
            <Input
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            onClick={handleRemove}
            className="bg-red-600 hover:bg-red-700 text-black"
          >
            Delete user
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
