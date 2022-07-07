import React from 'react'


import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from "react-accessible-accordion";

import './fancy.css';


const Acc = () => {
  return (
    <div>
      <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do i place an order?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas!</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How soon will my order be ship?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas!</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    I there any warranty exclusions?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas!</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Will i be charged for the waybill?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas!</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How can i track my orders & payment?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas!</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
    </div>
  )
}

export default Acc;


