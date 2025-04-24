"use client"

import { useEffect, useState } from "react"
import { File, FileCheck, Upload } from "lucide-react"

export function FileUploadAnimation() {
  const [stage, setStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [files, setFiles] = useState<string[]>([])

  // Simulate file upload process
  useEffect(() => {
    const fileNames = ["Company_Handbook.pdf", "Product_Documentation.docx", "Employee_Policies.pdf"]

    // Reset animation when component mounts
    setStage(0)
    setProgress(0)
    setFiles([])

    // Stage 0: Initial state
    const timer1 = setTimeout(() => {
      setStage(1) // Dragging files
    }, 1000)

    // Stage 1: Files appear
    const timer2 = setTimeout(() => {
      setFiles(fileNames)
      setStage(2) // Files dropped
    }, 2000)

    // Stage 2: Upload progress
    const timer3 = setTimeout(() => {
      setStage(3) // Uploading
    }, 3000)

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Stage 3: Complete
    const timer4 = setTimeout(() => {
      setStage(4) // Complete
      clearInterval(progressInterval)
      setProgress(100)
    }, 6000)

    // Stage 4: Reset after delay
    const timer5 = setTimeout(() => {
      setStage(0)
      setProgress(0)
      setFiles([])
    }, 8000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4 relative min-h-[300px] flex flex-col items-center justify-center">
      {stage === 0 && (
        <>
          <div className="mx-auto bg-muted rounded-full p-4 w-fit">
            <Upload className="h-8 w-8 text-primary animate-bounce-light" />
          </div>
          <h3 className="text-xl font-medium">Upload Your Documents</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Drag and drop files here or click to browse. We support PDF, DOCX, TXT, CSV, and more.
          </p>
        </>
      )}

      {stage === 1 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 w-3/4 h-3/4 flex items-center justify-center">
            <div className="animate-pulse-slow">
              <Upload className="h-16 w-16 text-primary/50" />
              <p className="mt-4 text-primary/70 font-medium">Drop files here</p>
            </div>
          </div>
        </div>
      )}

      {(stage === 2 || stage === 3 || stage === 4) && (
        <div className="w-full space-y-4">
          <h3 className="text-xl font-medium mb-4">
            {stage === 2 ? "Preparing Files..." : stage === 3 ? "Uploading Files..." : "Upload Complete!"}
          </h3>

          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <File className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-primary to-accent ${stage < 4 ? "shimmer" : ""}`}
                    style={{
                      width: `${stage === 2 ? 0 : stage === 3 ? progress : 100}%`,
                      transition: "width 0.3s ease-out",
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-muted-foreground">{file}</p>
                  <p className="text-sm text-muted-foreground">
                    {stage === 2 ? "Preparing..." : stage === 3 ? `${Math.min(progress, 100)}%` : "Complete"}
                  </p>
                </div>
              </div>
              {stage === 4 && <FileCheck className="h-5 w-5 text-green-500 animate-fade-in" />}
            </div>
          ))}
        </div>
      )}

      {stage === 0 && (
        <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
          Browse Files
        </button>
      )}
    </div>
  )
}
