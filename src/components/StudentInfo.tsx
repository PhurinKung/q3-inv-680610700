import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline" />}>Phichamon Kaewboot</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>Student information</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            {/* Content here */}
            <Card>
              <img src="/me.jpg"/>
              <CardHeader>
                <CardTitle>Phichamon  Kaewboot</CardTitle>
                <CardDescription>นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ชั้นปีที่ 2 มหาวิทยาลัยเชียงใหม่</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Badge >Hobby</Badge> ดูหนัง, ฟังเพลง, เล่นเกม
                </div>
                <div>
                  <Badge>Email</Badge><span> phichamon_ka@cmu.ac.th</span>
                </div>
                <div>
                  <Badge>Social</Badge><span> ig: phurinkung</span>
                </div>
              </CardContent>
              <CardFooter>
                รหัสนักศึกษา: 680610700
              </CardFooter>
            </Card>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
        Name
      </button> */}
    </div>
  );
}
