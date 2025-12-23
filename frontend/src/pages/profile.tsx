import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';
import { MOCK_USER } from '../lib/data';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export default function ProfilePage() {
  const navigate = useNavigate();
  const user = MOCK_USER;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar / User Info */}
            <div className="w-full md:w-1/3 space-y-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                     <Avatar className="h-24 w-24">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="text-2xl">{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                     </Avatar>
                  </div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full mb-2">Edit Avatar</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="font-semibold">3</span>
                  </div>
                   <div className="flex justify-between">
                    <span className="text-muted-foreground">Likes Received</span>
                    <span className="font-semibold">120</span>
                  </div>
                   <div className="flex justify-between">
                    <span className="text-muted-foreground">Forks</span>
                    <span className="font-semibold">15</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content / Settings */}
            <div className="w-full md:w-2/3">
              <Tabs defaultValue="account">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>
                
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>Update your profile details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Display Name</Label>
                        <Input id="name" defaultValue={user.name} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue={user.email} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input id="bio" placeholder="Tell us about yourself" />
                      </div>
                      <div className="pt-4">
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="preferences">
                   <Card>
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                      <CardDescription>Manage your app settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
                        </div>
                        {/* Use Switch here if available, using simple text for now */}
                        <div className="text-sm font-medium text-green-500">Enabled</div>
                      </div>
                       <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Use dark theme across the application.</p>
                        </div>
                        <div className="text-sm font-medium text-green-500">On</div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
