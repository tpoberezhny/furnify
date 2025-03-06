import { Progress } from "@components/ui/progress";

export default function Loading() {
  return (
    <div className="flex items-center fustify-center h-screen max-w-5xl mx-auto px-4">
      <Progress value={38} />
    </div>
  )
}