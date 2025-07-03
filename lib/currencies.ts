export const Currencies = [
  { value: "INR", label: "₹ Rupee", locale: "en-IN" },    // India locale
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },     // Germany locale
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },       // Japan locale
  { value: "GBP", label: "£ Pound", locale: "en-GB" },     // UK locale
];

export type Currency = (typeof Currencies)[0];
