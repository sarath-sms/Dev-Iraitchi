export function testRegex(regex, str) {
    return regex.test(str);
  }

  export function removeFalsy(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v)
    );
  }

  export const getLocation = (setLocation, setError) => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  export function maskMobile(number) {
    if (!number) return "";
    const first2 = number.slice(0, 2);
    const last4 = number.slice(-4);
    const middle = number.slice(2, -4).replace(/\d/g, "X");
    return first2 + middle + last4;
  }