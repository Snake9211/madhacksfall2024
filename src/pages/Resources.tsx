import ResourceSection from '../components/ResourceSection';

function Resources() {
  return (
    <div className="max-w-screen-lg w-4/6 mx-auto my-1 min-h-screen flex flex-col px-4 py-8 space-y-6">
      <div className="space-y-4">
        <h1>
          <span className="underline">Scam Hotlines</span>&#128222;
        </h1>
        <div>
          <h3>
            <span className="text-red-700">SSA:</span> Social Security
            Administration Fraud Hotline.
          </h3>
          <p>Phone: 1-800-269-0271</p>
        </div>
        <div>
          <h3>
            <span className="text-red-700">FTC:</span> Report general banking
            scams, ID theft, and fraud.
          </h3>
          <p>Phone: 1-877-FTC-HELP (1-877-382-4357)</p>
        </div>
        <div>
          <h3>
            <span className="text-red-700">CFPB:</span> Report fraud to the
            Consumer Financial Protection Bureau.
          </h3>
          <p>Phone: (855) 411-2372</p>
        </div>
      </div>
      <div className="space-y-6">
        <h1>
          <span className="underline">What to Do If You Have Been Scammed</span>
          &#10071;
        </h1>
        <div>
          <h2>Step 1: Protect Yourself Immediately</h2>
          <p>
            Freeze all bank accounts, change passwords, and contact all payment
            services potentially affected.
          </p>
        </div>
        <div>
          <h2>Step 2: Report the Scam</h2>
          <p>
            First, report the scam email, phone number, or whatever platform you
            recieved it on. Then, contact all fraud organizations such as the{' '}
            <a
              href="https://reportfraud.ftc.gov/"
              target="_blank"
              className="underline text-red-400"
            >
              FTC
            </a>
            ,{' '}
            <a
              href="https://www.bbb.org/scamtracker/reportscam"
              target="_blank"
              className="underline text-red-400"
            >
              {' '}
              Better Business Bureau
            </a>
            , and submit a report{' '}
            <a href="/" target="_blank" className="underline text-red-400">
              here!
            </a>
          </p>
        </div>
        <div>
          <h2>Step 3: Future Prevention</h2>
          <p>
            To identify different types of scams, look at the section below! In
            general, if someone is asking for personal information or an
            opportunity sounds too good to be true, it is likely to be a scam!
            Remember to NEVER click on links from unknown senders, send
            information, and overshare on social media.
          </p>
          <p>
            {' '}
            <a
              href="https://consumer.ftc.gov/articles/how-avoid-scam"
              target="_blank"
              className="underline text-red-400"
            >
              Click here
            </a>{' '}
            to stay updated on scams on the official FTC page.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h1>
          <span className="underline">
            Identifying <span className="text-red-700">Scams </span>
          </span>
          &#128269;
        </h1>
        <p>
          In general, whenever you are asked for{' '}
          <span className="underline">personal information</span>, be wary of
          the message. Some specific personal information not to share is:
          address, SSN, credit card number, and any other government issued
          identification details. When an email or message is received from a
          bank, be sure to check the message.
        </p>
        <p>Below are a few examples: </p>
        <ResourceSection />
      </div>
    </div>
  );
}

export default Resources;
