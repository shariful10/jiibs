"use client";
import { useState } from "react";
import leftIcon from "@/assets/leftIcon.svg";
import PageTitle from "@/Components/Pages/profileInfo/PageTitle";
import ProfileInfoDetails from "@/Components/Pages/profileInfo/ProfileInfoDetails";
import Image from "next/image";
import Link from "next/link";
import Container from "@/Components/Regular/Container";

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
    <Container className="px-6 md:px-0">
      <div className="mt-10 mb-20">
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
