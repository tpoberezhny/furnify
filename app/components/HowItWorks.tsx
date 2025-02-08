import Image from "next/image";

export default function HowItWorks() {
  return (
    <div id="howItWorks" className="mt-10 lg:mt-20 text-center max-w-6xl mx-auto scroll-mt-20">
      <div>
        <h1 className="title leading-[2rem] lg:leading-[3.3rem]">
          Upgrade your <span className="text-primary">spaces</span>
          <br />
          in just a few steps!
        </h1>
        <h3 className="description-text customTopMargin dark:invert max-w-4xl mx-auto">
          Start using furniture on a subscription basis for your spaces, and
          from now on, expanding your team or moving to a new apartment will no
          longer be a hassle.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/*Contact Us */}
        <div className="bg-gray-50 p-2 rounded-2xl">
          <Image
            src="/assets/contactUs.png"
            alt="Contact Us"
            width={350}
            height={250}
            className="object-contain mx-auto [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
          />
          <div className="mb-5 p-2">
            <h2 className="text-left mt-8 font-semibold text-lg dark:invert">
              1. Submit your request:
            </h2>
            <p className="text-left mt-3 font-normal text-base dark:invert">
              Contact us by filling our your personal/business details and the message field in the form to request furniture. 
            </p>
          </div>
        </div>
        {/*Call from Furnify */}
        <div className="bg-gray-50 rounded-2xl">
          <div className="p-4">
            <h2 className="text-left mt-3 font-semibold text-lg dark:invert">
              2. Consulting and planning:
            </h2>
            <p className="text-left mt-3 font-normal text-base dark:invert">
              We&apos;ll contact you and discuss the details and understand your
              demand.
            </p>
          </div>
          <Image
            src="/assets/call.png"
            alt="Call"
            width={300}
            height={200}
            className="object-contain mx-auto [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
          />
        </div>
        {/*Subscription*/}
        <div className="bg-gray-50 p-2 rounded-2xl">
          <Image
            src="/assets/16.png"
            alt="Contact Us"
            width={350}
            height={250}
            className="object-contain mx-auto [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)]"
          />
          <div className="mb-5 p-2">
            <h2 className="text-left mt-8 font-semibold text-lg dark:invert">
              3. Subscription:
            </h2>
            <p className="text-left mt-3 font-normal text-base dark:invert">
              You will receive a subscription offer from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
