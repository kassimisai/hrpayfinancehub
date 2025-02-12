
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-secondary">Settings</h1>
        <p className="text-muted-foreground">Manage your organization settings</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[calc(100vh-250px)]">
          <TabsContent value="general" className="mt-6">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Company Name</label>
                    <Input placeholder="Enter company name" defaultValue="Acme Inc." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Website</label>
                    <Input placeholder="Enter website URL" defaultValue="https://acme.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Contact Email</label>
                    <Input placeholder="Enter contact email" defaultValue="contact@acme.com" />
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Address</label>
                    <Input placeholder="Enter address" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">City</label>
                      <Input placeholder="Enter city" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Country</label>
                      <Input placeholder="Enter country" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
