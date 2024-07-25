"use client";

import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

const UpdateUser = ({ user }: { user: User }) => {
  const [cover, setCover] = useState<any>(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData) => updateProfile(formData, cover?.secure_url)}
            className="relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w1/3"
          >
            {/* TITLE */}
            <h1>Update Profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Click on your avatar above to update or change the username
            </div>
            {/* COVER PIC UPLOAD*/}
            <CldUploadWidget
              uploadPreset="socialMediaApp"
              onSuccess={(result) => setCover(result.info)}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-4 my-4"
                    onClick={() => open()}
                  >
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={user.cover || "/noCover.png"}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            {/* WRAPPER */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              {/* INPUT */}
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder={user.name || "John"}
                  className="ring-1 ring-gray-300 rounded-md text-sm p-[13px]"
                  name="name"
                />
              </div>

              {/* INPUT */}
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder={user.surname || "Doe"}
                  className="ring-1 ring-gray-300 rounded-md text-sm p-[13px]"
                  name="surname"
                />
              </div>

              {/* INPUT */}
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-xs text-gray-500">
                  Description
                </label>
                <input
                  type="text"
                  placeholder={user.description || "What's on your mind?"}
                  className="ring-1 ring-gray-300 rounded-md text-sm p-[13px]"
                  name="description"
                />
              </div>

              {/* INPUT */}
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  placeholder={user.city || "Rando"}
                  className="ring-1 ring-gray-300 rounded-md text-sm p-[13px]"
                  name="city"
                />
              </div>

              {/* INPUT */}
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  type="text"
                  placeholder={user.school || "MIT"}
                  className="ring-1 ring-gray-300 rounded-md text-sm p-[13px]"
                  name="school"
                />
              </div>

              {/* INPUT */}
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  type="text"
                  placeholder={user.work || "Google"}
                  className="ring-1 ring-gray-300 rounded-md text-sm p-[13px]"
                  name="work"
                />
              </div>

              {/* INPUT */}
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  placeholder={user.website || "google.com"}
                  className="ring-1 ring-gray-300 rounded-md text-sm p-[13px]"
                  name="website"
                />
              </div>
            </div>
            <button className="bg-blue-500 p-2 mt-2 rounded-md text-white">
              Update
            </button>
            <div
              className="absolute text-lg right-4 top-2 cursor-pointer"
              onClick={handleClose}
            >
              X
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
