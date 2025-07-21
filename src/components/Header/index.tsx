import React from 'react'

import { Button } from "@/components/ui/button";
import { Github, Heart } from "lucide-react";

const index: React.FC<{bgColor: string, borderColor?: string}> =  ({bgColor, borderColor}) =>{
  return (
    <header className={`sticky top-0 z-50 ${bgColor}  backdrop-blur-md border-b ${borderColor}  sm:px-6 md:px-8`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <img src="./contributorhub.jpg" alt="Logo" className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  ContributorHub
                </h1>
                <p className="text-xs text-muted-foreground">Premium Contributors Platform</p>
              </div>
            </div>


            <div className="flex items-center gap-3">
            <a href="https://github.com/sujanthapa01/ContributorHub" target="_blank" rel="noopener noreferrer" className="hidden sm:block md:block">
                <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                <Github className="w-4 h-4 mr-2" />
                View Source
              </Button>
            </a>
              <a href="" className="hidden sm:block md:block">
                <Button size="sm"  className="bg-gradient-to-r from-primary to-pink-400 hover:from-primary/90 hover:to-pink-600/90 transition-colors ">
                <Heart className="w-4 h-4 mr-2" />
                Sponsor
              </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

  )
}

export default index