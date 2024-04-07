import Image from "next/image";
import {Button} from '@nextui-org/button';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">      
      <Navbar />
      <Button>Click me</Button>
    </main>
  );
}
  