"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from '@/components/ui/card'
  import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Marquee from '@/components/ui/marquee'
import  ProjectCard  from '@/components/ui/image-card'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/ui/dot-pattern'
import { Alert , AlertDescription,AlertTitle} from '@/components/ui/alert'





export default function Home() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
  const projects = [
    {
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "Analytics Dashboard",
      year: "2024",
      description: "A comprehensive analytics platform for tracking user metrics and visualizing data trends in real-time.",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
      website: "https://example.com",
      source: "https://github.com/example/analytics"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "Task Manager Pro",
      year: "2023",
      description: "Collaborative task management tool with real-time updates and team productivity tracking features.",
      tech: ["Vue", "Node.js", "MongoDB", "Socket.io"],
      website: "https://example.com",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
      title: "E-Commerce Platform",
      year: "2024",
      description: "Modern e-commerce solution with secure payments, inventory management, and customer analytics.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      source: "https://github.com/example/ecommerce"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      title: "Weather Forecast App",
      year: "2023",
      description: "Beautiful weather application providing accurate forecasts with interactive maps and severe weather alerts.",
      tech: ["React Native", "OpenWeather API", "Redux"],
      website: "https://example.com",
      source: "https://github.com/example/weather"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
      title: "Social Media Hub",
      year: "2024",
      description: "Connect with friends and share moments through photos, stories, and live updates in real-time.",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      website: "https://example.com",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Portfolio Builder",
      year: "2023",
      description: "Create stunning portfolios with drag-and-drop interface and customizable themes for designers and developers.",
      tech: ["Svelte", "TypeScript", "Supabase", "SCSS"],
      source: "https://github.com/example/portfolio"
    }
  ]
  return (
    <>

    <div className="fixed inset-0 -z-10">
  <DotPattern />
</div>

  
    <div className="min-h-screen p-6 md:p-8  ">
      
      
      <div className="max-w-2xl mx-auto">
        
        {/* Header Section - Always row layout with avatar on right */}
        <div className="flex items-center justify-between gap-4 mt-8 md:mt-16">
          
          {/* Text Content - Left aligned */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl">Hi, I'm Abhishek 👋</h1>
            <p className="mt-2 md:mt-4 text-base md:text-xl">
              Full Stack Developer and Curious Builder
            </p>
          </div>
          
          {/* Avatar - Always on right */}
          <Avatar className="w-20 h-20 md:w-36 md:h-36 flex-shrink-0">
            <AvatarImage src="https://avatars.githubusercontent.com/u/157394189?v=4" alt="Aditya's Avatar" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          
        </div>

      

        
        <Card className="mt-8 md:mt-12  bg-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl ">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed">
              I'm Abhishek, a passionate Full Stack Developer with expertise in building dynamic web applications using modern technologies like React, Node.js, and MongoDB. I love creating efficient and scalable solutions that solve real-world problems. When I'm not coding, you can find me exploring new tech trends or contributing to open-source projects.
            </p>
          </CardContent>
          
        </Card>

        {/* Work Experience Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Work Experience</h2>
          
          {/* Experience items would go here */}
          <Accordion type="single" className='space-y-4 ' collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                <div className='flex  gap-4'>
                  <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                    <AvatarImage src= "./Zentor.jpg" alt="Company 1 Logo" />
                    <AvatarFallback>CI</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg md:text-xl font-semibold">Software Engineer at TechCorp</h2>
                
                  </div>
                
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-base leading-relaxed mt-2">
                  Developed and maintained web applications using React and Node.js, improving performance by 30%. Collaborated with cross-functional teams to deliver projects on time.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                <div className='flex  gap-4'>
                  <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                    <AvatarImage src="./founderscart_logo.jpg" alt="Company 2 Logo" />
                    <AvatarFallback>CI</AvatarFallback>
                  </Avatar>
                  <div>
                  <h2 className="text-lg md:text-xl font-semibold">Frontend Developer at WebSolutions</h2>
                  <p > Dec 2025 - Present</p>
                </div>
                  </div>

              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-base leading-relaxed mt-2">
                  Implemented responsive UI components using React and Tailwind CSS. Worked closely with designers to enhance user experience and accessibility.
                </p>
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                <div className='flex  gap-4'>
                  <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                    <AvatarImage src="./tringbox_logo.jpg" alt="Company 2 Logo" />
                    <AvatarFallback>CI</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg md:text-xl font-semibold">Frontend Developer at WebSolutions</h2>
                
                  </div>

              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-base leading-relaxed mt-2">
                  Implemented responsive UI components using React and Tailwind CSS. Worked closely with designers to enhance user experience and accessibility.
                </p>
              </AccordionContent>
            </AccordionItem>
            </Accordion>

          
        </div>

        <div className="mt-8 md:mt-12">

          <h1 className="text-2xl md:text-3xl font-bold mb-6">Skills</h1>

        <Marquee items={items} />
       
        </div>
        
          <div className="mt-8 md:mt-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 gap-6">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <div>

        </div>

        {/* Freelance CTA */}
<div className="mt-16 md:mt-20">
  <Card
    className="
      bg-secondary-background
      border border-border
      rounded-[var(--radius-base)]
      shadow-shadow
      
    "
  >
    <CardHeader className="items-center text-center space-y-4 ">

      <Badge
        className="
          bg-main text-main-foreground
          border border-border
          rounded-[var(--radius-base)]
          shadow-shadow
          px-4 py-1 
          mx-auto
          
        "
      >
        Freelance & Collaboration
      </Badge>

      <CardTitle className="text-3xl md:text-5xl font-heading leading-tight">
        Ready to Build <br className="hidden sm:block" />
        Something Great?
      </CardTitle>

      <CardDescription className="max-w-xl text-foreground/70">
        I'm available for freelance projects, consulting, and collaborations.
        Whether you need a Web3 dApp, a full-stack application, or smart contract
        development — let’s build something impactful.
      </CardDescription>

    </CardHeader>

    <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center pb-8">

      <button
        className="
          bg-main text-main-foreground
          border border-border
          rounded-[var(--radius-base)]
          px-8 py-4 font-base
          shadow-shadow
          transition-all
          hover:translate-x-[1px]
          hover:translate-y-[1px]
        "
      >
        Send a Free Message
      </button>

      <button
        className="
          bg-background text-foreground
          border border-border
          rounded-[var(--radius-base)]
          px-8 py-4 font-base
          shadow-shadow
          transition-all
          hover:translate-x-[1px]
          hover:translate-y-[1px]
        "
      >
        <a href="mailto:jainabhishekarham@gmail.com">Send an Email</a>
      </button>

    </CardFooter>
  </Card>
</div>

      
        

     
        
       


       

      </div>
      
       

    </div>
    </>
  );
}
