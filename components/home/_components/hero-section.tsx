import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30 mx-6" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6 py-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl text-gray-100 md:text-6xl font-bold mb-6 tracking-tight">
            Run Your Clinic Smarter: Book Appointments, Manage Patient Records
            <br />
            in One Simple Platform.
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Designed for independent practitioners and small clinics, MedicTrack helps you to streamline booking&apos;s, reduce no-shows, and keep every patient record organized–with ease.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="text-white gap-2 border-white/10 bg-white/5 hover:bg-white/10">
              <Play className="w-4 h-4" />
              Demo
            </Button>
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Download
            </Button>
          </div>
        </div>

        <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="relative">
            <Image
              src="/hero.jpeg"
              alt="Background Gradient"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl w-[90%] h-[70%] flex">
                <div className="flex-1 pr-2">
                  <Image
                    src="/browser.png"
                    alt="Browser Preview"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </div>
                <div className="flex-1 pl-2">
                  <Image
                    src="/editor.png"
                    alt="Code Editor"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </ShineBorder>
      </ShineBorder>
    </section>
  )
}
