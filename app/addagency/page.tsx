"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function Page() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    services: "",
    about: "",
    phone_number: "",
    website: "",
    location: "",
    featured: "",
    logo: null as File | null,
  });
  const [busy, setBusy] = useState(false);

  const {
    name,
    address,
    services,
    about,
    website,
    phone_number,
    location,
    featured,
    logo,
  } = userInfo;

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setUserInfo({ ...userInfo, logo: file });
    }
  };
    

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setBusy(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("services", services);
    formData.append("about", about);
    formData.append("website", website);
    formData.append("phone_number", phone_number);
    formData.append("location", location);
    formData.append("featured", featured);
    if (logo !== null) {
      formData.append("logo", logo);
    }

    const res = await fetch(
      "https://gind-agencies.onrender.com/api/create",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());

    console.log(res);
    setBusy(false);
  };

  return (
    <div className="pt-40">
      <form onSubmit={handleSubmit}>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            Name<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={name}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, name: target.value })
            }
          />
        </div>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            Address<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={address}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, address: target.value })
            }
          />
        </div>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            Services<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={services}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, services: target.value })
            }
          />
        </div>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            About<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={about}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, about: target.value })
            }
          />
        </div>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            Website<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={website}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, website: target.value })
            }
          />
        </div>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            Phone Number<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={phone_number}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, phone_number: target.value })
            }
          />
        </div>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            Location<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={location}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, location: target.value })
            }
          />
        </div>
        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">
            Featured<sup>*</sup>
          </label>
          <input
            className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
            type="text"
            value={featured}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, featured: target.value })
            }
          />
        </div>
      
      

        <div className="sm:mb-6 mb-4">
          <label className="mb-2 text-base">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2"
          />
        </div>

        <div className="">
          <button
            className="w-[100%] text-lg h-[48px] bg-[#181818] text-white rounded mb-4"
            disabled={busy || !featured}
            style={{ opacity: busy ? 0.5 : 1 }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
