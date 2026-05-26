import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useNavigate, useParams } from "react-router";
import { permissions } from "~/data/users";
import { X } from "lucide-react";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const per = permissions.find((u) => u.id === id);
  if (!per) throw new Response("Not Found", { status: 404 });
  const handleSubmit = () => {};
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between items-start">
          <div>
            <CardTitle>{`Edit ${per?.title}`}</CardTitle>
            <CardDescription>Edit permission info</CardDescription>
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
            
        </CardContent>
      </Card>
    </div>
  );
}
