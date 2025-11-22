"use client";

import { useUser, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Profile() {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn || !user) {
    return <p>You need to login first.</p>;
  }

  const role = user?.publicMetadata?.role || "No role assigned";

  return (
    <div>
      <SignedIn>
        <h1>
          Welcome {user.firstName} {user.lastName}
        </h1>

        <p>Email: {user.emailAddresses[0].emailAddress}</p>
        <p>User ID: {user.id}</p>
        <p>User Role: {role}</p>

        <UserButton />
      </SignedIn>

      <SignedOut>
        <p>Please login to see your profile.</p>
      </SignedOut>
    </div>
  );
}
