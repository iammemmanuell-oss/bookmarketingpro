const CONTACT_EMAIL = "emmanuel@hq360.space";

export function createContactEmailUrl(subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}