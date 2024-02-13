"use client";

import ButtonBlack from "@/Components/Regular/Buttons/ButtonBlack";
import ButtonPrimary from "@/Components/Regular/Buttons/ButtonPrimary";
import MapLocator from "./MapLocator";

export default function LocationMap() {
  // Request a Tour
  const handleTour = () => {};

  // Get in Touch
  const handleTouch = () => {};

  return (
    <div className="w-full">
      {/* head address part */}
      <div>
        <h1 className="text-3xl font-semibold">70 Pine Street</h1>
        <p className="text-xl font-normal mt-3">
          70 Pine Street, New York, new york 100005
        </p>
        <div className="flex gap-4 items-center justify-between flex-wrap mt-2">
          <UnitsStories name={`150 Units`} icons={buildingIcons} />
          <UnitsStories name={`66 Stories`} icons={storiesUpIcons} />
          <UnitsStories name={`2024 Built Year`} icons={calenderIcons} />
        </div>
      </div>

      {/* buttons */}
      <div className="fixed bottom-0 inset-x-0 w-full md:static z-50">
        <div className="bg-white md:bg-transparent w-full">
          <div className="py-5 px-4 md:px-0 md:py-8 md:block flex flex-row-reverse items-center gap-3.5 justify-between">
            <ButtonPrimary onClick={handleTour}>
              <span>Request a Tour</span>
            </ButtonPrimary>
            <ButtonBlack
              onClick={handleTouch}
              className="md:mt-4"
              styleReverse={true}
            >
              <span>Get in Touch</span>
            </ButtonBlack>
          </div>
        </div>
      </div>

      {/* locator */}
      <div className="hidden md:block">
        <MapLocator />
      </div>
    </div>
  );
}

// mini components
function UnitsStories({ name, icons }) {
  return (
    <div className="flex gap-2 items-center justify-start min-w-max">
      <figure> {icons} </figure>
      <p> {name} </p>
    </div>
  );
}

//
var buildingIcons = (
  <svg
    width={14}
    height={17}
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.625 15.1421H13V1.62083C13 1.22779 12.6642 0.90918 12.25 0.90918H1.75C1.33578 0.90918 1 1.22779 1 1.62083V15.1421H0.375C0.167906 15.1421 0 15.3015 0 15.498V16.091H14V15.498C14 15.3015 13.8321 15.1421 13.625 15.1421ZM4 3.16273C4 2.96623 4.16791 2.80691 4.375 2.80691H5.625C5.83209 2.80691 6 2.96623 6 3.16273V4.34881C6 4.54532 5.83209 4.70464 5.625 4.70464H4.375C4.16791 4.70464 4 4.54532 4 4.34881V3.16273ZM4 6.00933C4 5.81282 4.16791 5.6535 4.375 5.6535H5.625C5.83209 5.6535 6 5.81282 6 6.00933V7.19541C6 7.39191 5.83209 7.55123 5.625 7.55123H4.375C4.16791 7.55123 4 7.39191 4 7.19541V6.00933ZM5.625 10.3978H4.375C4.16791 10.3978 4 10.2385 4 10.042V8.85592C4 8.65942 4.16791 8.5001 4.375 8.5001H5.625C5.83209 8.5001 6 8.65942 6 8.85592V10.042C6 10.2385 5.83209 10.3978 5.625 10.3978ZM8 15.1421H6V12.6514C6 12.4549 6.16791 12.2956 6.375 12.2956H7.625C7.83209 12.2956 8 12.4549 8 12.6514V15.1421ZM10 10.042C10 10.2385 9.83209 10.3978 9.625 10.3978H8.375C8.16791 10.3978 8 10.2385 8 10.042V8.85592C8 8.65942 8.16791 8.5001 8.375 8.5001H9.625C9.83209 8.5001 10 8.65942 10 8.85592V10.042ZM10 7.19541C10 7.39191 9.83209 7.55123 9.625 7.55123H8.375C8.16791 7.55123 8 7.39191 8 7.19541V6.00933C8 5.81282 8.16791 5.6535 8.375 5.6535H9.625C9.83209 5.6535 10 5.81282 10 6.00933V7.19541ZM10 4.34881C10 4.54532 9.83209 4.70464 9.625 4.70464H8.375C8.16791 4.70464 8 4.54532 8 4.34881V3.16273C8 2.96623 8.16791 2.80691 8.375 2.80691H9.625C9.83209 2.80691 10 2.96623 10 3.16273V4.34881Z"
      fill="#626262"
    />
  </svg>
);
var calenderIcons = (
  <svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 15.3928C0 16.271 0.767857 16.9836 1.71429 16.9836H14.2857C15.2321 16.9836 16 16.271 16 15.3928V6.3786H0V15.3928ZM11.4286 8.89728C11.4286 8.67855 11.6214 8.49959 11.8571 8.49959H13.2857C13.5214 8.49959 13.7143 8.67855 13.7143 8.89728V10.2229C13.7143 10.4416 13.5214 10.6206 13.2857 10.6206H11.8571C11.6214 10.6206 11.4286 10.4416 11.4286 10.2229V8.89728ZM11.4286 13.1393C11.4286 12.9205 11.6214 12.7416 11.8571 12.7416H13.2857C13.5214 12.7416 13.7143 12.9205 13.7143 13.1393V14.4649C13.7143 14.6836 13.5214 14.8626 13.2857 14.8626H11.8571C11.6214 14.8626 11.4286 14.6836 11.4286 14.4649V13.1393ZM6.85714 8.89728C6.85714 8.67855 7.05 8.49959 7.28571 8.49959H8.71429C8.95 8.49959 9.14286 8.67855 9.14286 8.89728V10.2229C9.14286 10.4416 8.95 10.6206 8.71429 10.6206H7.28571C7.05 10.6206 6.85714 10.4416 6.85714 10.2229V8.89728ZM6.85714 13.1393C6.85714 12.9205 7.05 12.7416 7.28571 12.7416H8.71429C8.95 12.7416 9.14286 12.9205 9.14286 13.1393V14.4649C9.14286 14.6836 8.95 14.8626 8.71429 14.8626H7.28571C7.05 14.8626 6.85714 14.6836 6.85714 14.4649V13.1393ZM2.28571 8.89728C2.28571 8.67855 2.47857 8.49959 2.71429 8.49959H4.14286C4.37857 8.49959 4.57143 8.67855 4.57143 8.89728V10.2229C4.57143 10.4416 4.37857 10.6206 4.14286 10.6206H2.71429C2.47857 10.6206 2.28571 10.4416 2.28571 10.2229V8.89728ZM2.28571 13.1393C2.28571 12.9205 2.47857 12.7416 2.71429 12.7416H4.14286C4.37857 12.7416 4.57143 12.9205 4.57143 13.1393V14.4649C4.57143 14.6836 4.37857 14.8626 4.14286 14.8626H2.71429C2.47857 14.8626 2.28571 14.6836 2.28571 14.4649V13.1393ZM14.2857 2.13662H12.5714V0.545873C12.5714 0.254237 12.3143 0.015625 12 0.015625H10.8571C10.5429 0.015625 10.2857 0.254237 10.2857 0.545873V2.13662H5.71429V0.545873C5.71429 0.254237 5.45714 0.015625 5.14286 0.015625H4C3.68571 0.015625 3.42857 0.254237 3.42857 0.545873V2.13662H1.71429C0.767857 2.13662 0 2.84914 0 3.72736V5.3181H16V3.72736C16 2.84914 15.2321 2.13662 14.2857 2.13662Z"
      fill="#626262"
    />
  </svg>
);
var storiesUpIcons = (
  <svg
    width={19}
    height={15}
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.90634 2.39672H11.2813C11.4388 2.39672 11.5898 2.34296 11.7012 2.24726C11.8125 2.15155 11.8751 2.02175 11.8751 1.88641V0.865782C11.8751 0.730439 11.8125 0.600639 11.7012 0.504936C11.5898 0.409234 11.4388 0.355469 11.2813 0.355469H8.90634C8.74887 0.355469 8.59785 0.409234 8.4865 0.504936C8.37515 0.600639 8.31259 0.730439 8.31259 0.865782V1.88641C8.31259 2.02175 8.37515 2.15155 8.4865 2.24726C8.59785 2.34296 8.74887 2.39672 8.90634 2.39672ZM8.90634 6.47923H13.6563C13.8138 6.47923 13.9648 6.42547 14.0761 6.32977C14.1875 6.23406 14.25 6.10426 14.25 5.96892V4.94829C14.25 4.81295 14.1875 4.68315 14.0761 4.58745C13.9648 4.49174 13.8138 4.43798 13.6563 4.43798H8.90634C8.74887 4.43798 8.59785 4.49174 8.4865 4.58745C8.37515 4.68315 8.31259 4.81295 8.31259 4.94829V5.96892C8.31259 6.10426 8.37515 6.23406 8.4865 6.32977C8.59785 6.42547 8.74887 6.47923 8.90634 6.47923ZM18.4063 12.603H8.90634C8.74887 12.603 8.59785 12.6568 8.4865 12.7525C8.37515 12.8482 8.31259 12.978 8.31259 13.1133V14.1339C8.31259 14.2693 8.37515 14.3991 8.4865 14.4948C8.59785 14.5905 8.74887 14.6443 8.90634 14.6443H18.4063C18.5637 14.6443 18.7147 14.5905 18.8261 14.4948C18.9374 14.3991 19 14.2693 19 14.1339V13.1133C19 12.978 18.9374 12.8482 18.8261 12.7525C18.7147 12.6568 18.5637 12.603 18.4063 12.603ZM8.90634 10.5617H16.0313C16.1887 10.5617 16.3398 10.508 16.4511 10.4123C16.5625 10.3166 16.625 10.1868 16.625 10.0514V9.0308C16.625 8.89546 16.5625 8.76566 16.4511 8.66996C16.3398 8.57425 16.1887 8.52049 16.0313 8.52049H8.90634C8.74887 8.52049 8.59785 8.57425 8.4865 8.66996C8.37515 8.76566 8.31259 8.89546 8.31259 9.0308V10.0514C8.31259 10.1868 8.37515 10.3166 8.4865 10.4123C8.59785 10.508 8.74887 10.5617 8.90634 10.5617ZM0.59391 4.43798H2.37514V14.1339C2.37514 14.2693 2.4377 14.3991 2.54905 14.4948C2.6604 14.5905 2.81142 14.6443 2.96889 14.6443H4.15638C4.31385 14.6443 4.46487 14.5905 4.57622 14.4948C4.68757 14.3991 4.75012 14.2693 4.75012 14.1339V4.43798H6.53136C7.05868 4.43798 7.32512 3.88812 6.95106 3.56694L3.98234 0.505054C3.871 0.409424 3.72004 0.355705 3.56263 0.355705C3.40523 0.355705 3.25427 0.409424 3.14293 0.505054L0.174207 3.56694C-0.198368 3.88748 0.0662193 4.43798 0.59391 4.43798Z"
      fill="#626262"
    />
  </svg>
);
