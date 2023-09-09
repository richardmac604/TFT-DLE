import Home from "./home"
import prisma from "@/script"

async function createItem(){
  "use server"
  await prisma.video.create({data:{name:"test", url:"8hO0nYdBx5U", Winner:"Top"}})
}

function getDB(){
  return prisma.video.findMany()
}

export default async function Page() {  
  const DB = await getDB()
  return (
    <main>
      <Home DB = {DB}></Home>
    </main>
  )
}
