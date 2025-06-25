import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function MeasurementGuide() {
  return (
    <div className="w-full space-y-4">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Measurements</TabsTrigger>
          <TabsTrigger value="tools">Measuring Tools</TabsTrigger>
          <TabsTrigger value="tips">Helpful Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-4 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="House measurement diagram showing front width, side width, and height"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-lg">How to Measure Your House:</h4>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>Front Width:</strong> Measure the width of the front of your house from one corner to the
                      other. This is the side that usually faces the street.
                    </li>
                    <li>
                      <strong>Side Width:</strong> Measure the depth of your house from the front corner to the back
                      corner (how deep your house is).
                    </li>
                    <li>
                      <strong>Wall Height:</strong> For each story, measure from the ground (or floor) to where the wall
                      meets the roof or ceiling.
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <h4 className="font-medium text-lg">Tools You Can Use:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Measuring tape"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium">Measuring Tape</h5>
                      <p className="text-sm text-muted-foreground">
                        A 25ft or longer tape measure works best for most houses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Laser measure"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium">Laser Measure</h5>
                      <p className="text-sm text-muted-foreground">
                        If available, a laser measure can make the job easier and more accurate.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Smartphone app"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium">Smartphone Apps</h5>
                      <p className="text-sm text-muted-foreground">
                        Several free apps can help measure distances using your phone's camera.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Yardstick or ruler"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium">Yardstick or Ruler</h5>
                      <p className="text-sm text-muted-foreground">
                        For smaller measurements or if no tape measure is available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <h4 className="font-medium text-lg">Helpful Measurement Tips:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium">Can't reach the top?</h5>
                      <p className="text-sm text-muted-foreground">
                        Each house is differen't but averages are 10ft per story. So two storys is 20ft. 
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium">Irregular shaped house?</h5>
                      <p className="text-sm text-muted-foreground">
                        Break it down into rectangles and measure each section separately.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium">Get help if needed</h5>
                      <p className="text-sm text-muted-foreground">
                        Ask a family member or neighbor to hold one end of the measuring tape.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h5 className="font-medium">Measure in sections</h5>
                      <p className="text-sm text-muted-foreground">
                        If your measuring tool isn't long enough, measure in sections and add the numbers together.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <span className="text-primary font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h5 className="font-medium">Not sure? It's okay!</h5>
                      <p className="text-sm text-muted-foreground">
                        If you're having trouble, provide your best estimate and we can always adjust the quote later.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
