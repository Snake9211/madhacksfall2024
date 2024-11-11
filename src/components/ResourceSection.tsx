import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ResourceSection = () => {
  return (
    <div className="my-4">
      <Accordion sx={{ boxShadow: 'none' }} className="border-y-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>
            <span className="text-red-600">Phishing: </span>
            <span className="font-normal">
              Impersonation of companies with goals of receiving private
              information from individuals.
            </span>
          </h3>
        </AccordionSummary>
        <AccordionDetails className=" ">
          <p>How to identify: </p>
          <ul className="list-disc pl-4 pb-3">
            <li>
              Do you have an account with this company? If so, verify the
              content by contacting the company directly via verified contact
              addresses.
            </li>
            <li>
              If email/text asks for{' '}
              <span className="underline">personal information or money</span>{' '}
              through a link, do not proceed until checked via verified contact
              addresses.
            </li>
          </ul>
          <p>Example: </p>
          <img
            src="/images/phishing.png"
            alt="paypal scam example"
            className="w-1/2 p-6"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 'none' }} className="border-b-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h3>
            <span className="text-red-600">Job Scams: </span>
            <span className="font-normal">
              Fake job listings sent through unsolicited messages promising
              employment.
            </span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>How to identify: </p>
          <ul className="list-disc pl-4 pb-3">
            <li>
              If the deal is “too good to be true”, verify with the lister,
              asking for more information and request an in person tour of
              property. If denied, it is likely a scam and do not proceed.
            </li>
            <li>
              If asking for far too personal information and banking information
              prior to in person meet up, do not proceed.
            </li>
          </ul>
          <p>Example: </p>
          <img
            src="/images/jobscam.png"
            alt="job scam example"
            className="w-1/2 p-6"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 'none' }} className="border-b-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h3>
            <span className="text-red-600">Housing Scams: </span>
            <span className="font-normal">
              Attempt to steal money from interested renters via a security
              deposit or move-in fee without ever seeing the apartment or rental
              unit, keeping the money without any intention of renting a unit.
            </span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>How to identify: </p>
          <ul className="list-disc pl-4 pb-3">
            <li>
              Do you have an account with this company? If so, verify the
              content by contacting the company directly via verified contact
              addresses.
            </li>
            <li>
              If email/text asks for{' '}
              <span className="underline">personal information or money</span>{' '}
              through a link, do not proceed until checked via verified contact
              addresses.
            </li>
          </ul>
          <p>Example: </p>
          <img
            src="/images/Scam-FB-Ad.jpg"
            alt="housing scam example"
            className="w-1/2 p-6"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ResourceSection;
