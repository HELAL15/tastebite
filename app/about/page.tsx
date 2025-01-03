import PageHeading from "@/components/ui/PageHeading";
import { Metadata } from "next";
import Image from "next/image";
//import { FC } from "react";

/**
 * ==> props interface
 */
// interface IProps {

// }
export const metadata: Metadata = {
  title: "Tastebite - about",
};
/**
 * ==> Component
 */
// : FC<IProps>
const page = ({  }) => {
  return (
    <>
      <section>
        <div className="container">
          <PageHeading title='about' />
          <div className="space-y-6">
            <h3 className=" text-3xl md:text-6xl w-full md:max-w-[90%] lg:max-w-[80%] font-bold">
              we are a group of foodies who love cooking and the internet
            </h3>
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="rounded w-full h-[300px] md:h-[500px] md:max-h-[500px] object-cover"  />
            <p className="text-lg font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, velit saepe eos laboriosam itaque vero est voluptatum aperiam corrupti aspernatur impedit ducimus aliquam, architecto consequatur soluta, rem dolores delectus ullam. Ad ducimus pariatur at, ipsam obcaecati laborum id esse ut molestiae voluptas praesentium enim corrupti perferendis eligendi accusantium doloribus eum deleniti perspiciatis minus quisquam aut explicabo maiores eius odit? Distinctio, debitis ullam incidunt alias cupiditate laudantium exercitationem repellat eos, magnam doloremque, iusto natus voluptates ipsum illo cumque vel facere corrupti quia. Sit impedit dolorem itaque mollitia dignissimos consectetur, possimus inventore temporibus ea nemo necessitatibus, amet officiis iure alias. At, eligendi.</p>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h3 className=" text-3xl md:text-6xl w-full md:max-w-[70%] font-bold">
                simple easy recipes for all
              </h3>
              <p className="text-lg font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eius repudiandae dolor quis dolore cumque quas atque corporis, optio excepturi laboriosam nam voluptatibus. Natus nesciunt voluptate ut! A aliquam, similique corrupti odit qui ex, nobis velit dicta expedita dolor necessitatibus provident alias accusamus laboriosam repellat quam illo. Asperiores ipsam unde autem dolorem repellat ullam odio illo quo consequatur fuga officia, quis non molestias facere soluta sit magni mollitia aliquid neque ea! Id autem ab cum rem quos tenetur porro asperiores! Minus omnis sapiente aliquid, rerum esse repudiandae repellendus cum at inventore odit numquam assumenda ipsam temporibus nobis velit amet similique!</p>
            </div>
          <Image src='/desserts.jpeg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="rounded w-full h-[300px] md:h-[450px] md:max-h-[450px] object-cover"  />
          </div>
        </div>
      </section>
      
      <section>
        <div className="container">
          <h3 className=" text-3xl md:text-6xl w-full md:max-w-[95%] lg:max-w-[65%] font-bold mb-6">
              an incredible team of talented chefs and foodies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>

            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>

            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>

            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>

            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>

            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>

            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>


            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>


            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>


            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>


            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>


            <div className="card space-y-3">
            <Image src='/header1.jpg' 
              alt="about"
              width={0} 
              height={0} 
              sizes="100vh" 
              className="w-full aspect-square rounded-full object-cover"  />
              <div className="text-center">
                <h4 className="text-2xl font-bold">ahmed helal</h4>
                <p className="text-secondary-100 font-semibold text-lg">chef extraordinaire</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

    </>
  );
}

export default page;