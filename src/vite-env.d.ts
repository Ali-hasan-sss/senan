/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL_INFO?: string;
  readonly VITE_CONTACT_EMAIL_SUPPORT?: string;
  readonly VITE_CONTACT_PHONE_1?: string;
  readonly VITE_CONTACT_PHONE_2?: string;
  readonly VITE_CONTACT_ADDRESS?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_WEEKDAYS_EN?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_WEEKDAYS_TIME_EN?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_WEEKEND_EN?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_CLOSED_EN?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_WEEKDAYS_AR?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_WEEKDAYS_TIME_AR?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_WEEKEND_AR?: string;
  readonly VITE_CONTACT_OFFICE_HOURS_CLOSED_AR?: string;
  [key: string]: string | undefined;
}
