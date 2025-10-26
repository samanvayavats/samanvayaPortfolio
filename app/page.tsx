import { ModeToggle } from "@/components/ui/modetoggle"
export default function home(){
  return (
    <div className="border-2 border-white outline-2 outline-white outline-offset-3 p-4 m-8 relative">
      <div className="absolute bottom-5 left-10">
        <ModeToggle/>
      </div>
    </div>
  )
}
