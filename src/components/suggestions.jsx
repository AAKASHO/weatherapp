import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Suggestions = () => {
  const [value, setValue] = useState(null);

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey='AIzaSyCPI0kdcKW1fFseMGM6Z0xPKFBTfXIoUD8'
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
};

export default Suggestions;