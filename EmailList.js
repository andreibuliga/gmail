import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Dear User"
          subject="Thank you note"
          description="Hi,
          Thank you for reaching out to learn more about us! The best way to learn more about our products/services as they pertain to you business is to set up a free consultation chat  with our specialist.
          
          There will be no obligation to sign up after the call.
          
          If you’d like to set up one of these consults, make sure to call us.
          
          We look forward to hearing from you!"
          time="10pm"
        />
        <EmailRow
          title="Hello there John!"
          subject="Thank you for signing up!"
          description="Thanks for signing up to receive emails from Collis Chiropractic Care! You’re now part of a community of hundreds of individuals just like you, looking to take charge of their health and longevity. As a subscriber, you can expect to get:
          First dibs on special offers and event registrations.
          Tips, tricks, and takes on the latest in chiropractic care.
          Exclusive subscriber-only updates and promos codes.
          ….and much more! (But don’t worry, we won’t bombard you 🙂).
          Better yet, as a new subscriber, we want to express our thanks by offering you 25% off your next visit! No printing necessary, just give us your email address when you book the appointment.
          To book your 25% off appointment, call us now at 555-555-2523.
          We look forward to seeing you!
          The CCC Team
          P.S. If you want even more Collis Chiropractic in your life, like us on Facebook, follow us on Instagram, or browse our blog so you won’t miss out on any of our goodies!"
          time="8pm"
        />
        <EmailRow
          title="Payment Notice"
          subject="Reminder"
          description="Hi John,
          Just a friendly reminder that the next payment for your account ending in 5383 is scheduled for automatic withdrawal from your bank account on November 10, 2020.
          
          Amount to be withdrawn: $149.99
          
          No action is needed on your part, we are just keeping you in the loop! Thanks for choosing ABC Business!
          
          Sincerely,
          
          Jane Doe
          
          ABC Business
          555-234-3345
          abcbusiness.com"
          time="4pm"
        />
        <EmailRow
          title="Offer!!"
          subject="Don't miss out on this amazing offer!"
          description="Hi John,

          Over 40 former Weeknight Chef members took advantage of our special rejoin offer last week and we hope you’ll be next!
          
          Sign back up today and get your first month plus three dessert kits FREE! Don’t delay — the offer is only valid for the first 100 returning members or until March 31 — whichever comes first.
          
          Click below to reunite with your inner chef today!
          
          May your dinnertime dread be gone,
          
          The Weeknight Chef Team
          
          Weeknight Chef
          
          555-345-6789
          
          info@weeknightchef.com
          
          Weeknightchef com"
          time="9pm"
        />
        <EmailRow
          title="Tanks for visiting us"
          subject="Mind to leave a review?"
          description="Hi Jane,
          Thanks for visiting Beckers Bicycle today! We are so glad we were able to meet your biking needs.
          
          If you have any questions about the item you purchased, or should any issues arise in the future, you can reach us at 555-283-1234 or email help@beckersbicycle.com.
          
          Cycle on!
          
          🚲 Beckers Bicycle
          931 Lamont Ave.
          Brigham NJ 33455
          555-283-1234
          beckersbicycle.com
          
          Enjoyed your experience? Leave us a review!"
          time="2pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
