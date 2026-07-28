import React from "react";

const ProfileInformation: React.FC = () => {
  return (
    <section className="glass-card rounded-xl p-lg md:p-xl fade-in-up tilt-card">
      <div className="border-b border-outline-variant pb-md mb-lg">
        <h2 className="text-headline-md font-headline-md text-on-surface">
          Profile Information
        </h2>
        <p className="text-sm text-on-surface-variant mt-2">
          Update your personal details and public profile.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-md items-start md:items-center mb-[16px]">
        <div className="relative group cursor-pointer shrink-0">
          <div className="w-20 h-20 rounded-xl overflow-hidden border border-outline-variant group-hover:border-primary transition-colors duration-300">
            <img
              alt="Alex Carter"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEkOdWvuwvilvGt31AbBZwEEtQBK2AGRXAK1LlJ7AKVMbp1UwwweDq80JnKnX18BkpmQFIcHT5RF-cDW1zNmYMO0arkq1qlNkooJ9oy0SJkuFBQz9PAM0e1PAMTjO7lfGF49qLY2ywkfarppInXOOqwwZ5AWv4KZenwijKbKScBYdeQooGkRo3BI5M3sMKoD-RjSHvMYdTkP8bOjgavpXE7E9oa9i6CR_4WtZcSVRN3DmaYYBd0L__KrGnv26-2dgDz2A2tu1KWkE"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="material-symbols-outlined text-white">
              photo_camera
            </span>
          </div>
        </div>
        <div className="flex-1 space-y-2 w-full">
          <label className="block text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
            Full Name
          </label>
          <input
            className="input-glass w-full rounded-lg px-md py-sm text-base"
            type="text"
            value="Alex Carter"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-[16px]">
        <div className="space-y-2">
          <label className="block text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
            Email Address
          </label>
          <input
            className="input-glass w-full rounded-lg px-md py-sm text-base text-on-surface"
            type="email"
            value="alex@prpilot.ai"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
            Timezone
          </label>
          <div className="relative">
            <select className="input-glass w-full rounded-lg px-md py-sm text-base appearance-none cursor-pointer">
              <option>Pacific Time (PT)</option>
              <option>Eastern Time (ET)</option>
              <option>Coordinated Universal Time (UTC)</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-sm">
        <button className="btn-primary px-lg py-sm rounded-lg text-sm font-semibold flex items-center justify-center">
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default ProfileInformation;
