"use client";
import { useState } from "react";
import leftIcon from "@/assets/left-icon.svg";
import Container from "@/Components/Regular/Container";
import PageTitle from "@/Components/Pages/profileInfo/PageTitle";
import ProfileInfoDetails from "@/Components/Pages/profileInfo/ProfileInfoDetails";
import Image from "next/image";
import Link from "next/link";

const PersonalInfo = () => {
  const [rename, setRename] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  const handleClose = () => {
    if (rename) setRename(false);
    if (editPass) setEditPass(false);
    if (editEmail) setEditEmail(false);
    if (editPhone) setEditPhone(false);
  };

  return (
    <Container>
      <div className="mt-10 mb-20 p-5 md:p-0">
        <div className="md:hidden">
          {rename || editPass || editEmail || editPhone ? (
            <div className="flex items-center">
              <Link href="/account/personal-info" onClick={handleClose}>
                <Image src={leftIcon} alt="leftIcon" />
              </Link>
              <p className="w-[80%] text-center">Editing Personal Info</p>
            </div>
          ) : (
            <PageTitle />
          )}
        </div>
        <div className="hidden md:block">
          <PageTitle />
        </div>
        <ProfileInfoDetails
          rename={rename}
          editPass={editPass}
          setRename={setRename}
          editEmail={editEmail}
          editPhone={editPhone}
          setEditPass={setEditPass}
          setEditEmail={setEditEmail}
          setEditPhone={setEditPhone}
        />
      </div>
    </Container>
  );
};

export default PersonalInfo;
