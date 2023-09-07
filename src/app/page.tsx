import Home from "./home"
import prisma from "@/script"

async function testing(){
    prisma.video.create({data:{name:"test video", url:"test url", Winner:"test winner"}}).then((mail) => {
        console.log(mail);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log('Experiment completed');
      });
}

export default function Page() {
  testing()
  
  
  return (
    <main>
      <Home></Home>
    </main>
  )
}
