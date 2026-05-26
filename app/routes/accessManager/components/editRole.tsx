import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useNavigate, useParams } from "react-router";
import { AllRoles } from "~/data/users";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { permissions } from "~/data/users";
import { Checkbox } from "~/components/ui/checkbox";
import { X } from "lucide-react";


export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const role = AllRoles.find((u) => u.id === id);
  if (!role) throw new Response("Not Found", { status: 404 });
  const handleSubmit = () => {};
  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4">
      <Card>
        <CardHeader className="flex flex-row justify-between items-start">
          <div>
            <CardTitle>{`Edit ${role?.name}`}</CardTitle>
            <CardDescription>Edit role info</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/access/rolemanager")}
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="roleName">Role Name</Label>
              <Input
                id="roleName"
                placeholder="e.g., Content Manager"
                value={role.name}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Brief description of the role"
                value={role.description}
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-base">Select permissions</Label>
              <Accordion type="multiple" className="w-full">
                {permissions.map((group, index) => (
                  <AccordionItem key={group.title} value={`item-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      {group.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-2 pt-2">
                        {group.accesses.map((perm) => (
                          <div
                            key={perm}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={perm} />
                            <Label
                              htmlFor={perm}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {perm}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/access/rolemanager")}
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
