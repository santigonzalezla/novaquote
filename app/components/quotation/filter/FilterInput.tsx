import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {ThemeProvider} from "@mui/system";
import {themeFilter} from "@/theme";

const FilterInput = ({options, text})=>
{
    return (
        <ThemeProvider theme={themeFilter}>
            <Autocomplete
                ListboxProps={{ style: { maxHeight: 200 } }}
                size="small"
                sx={{
                    width: '100%',
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: `14px !important`,
                    borderRadius:20,
                    cursor: 'pointer',
                }}
                options={options}
                renderInput={(params) => (
                    <div>
                        <input
                            type="text"
                            placeholder={text}
                            {...params.inputProps}
                            style={{
                                width: '100%',
                                border: 'none',
                                backgroundColor: 'transparent',
                                fontFamily: 'var(--font-satoshi)',
                                color: '#000',
                                outline: 'none',
                                fontSize: 14,
                                fontWeight: 700,
                                cursor: 'pointer',
                            }}
                        />
                        <div
                            ref={params.InputProps.ref}
                            style={{
                                position: 'absolute',
                                fontSize: 14,
                                width: '110%',
                                left: '-5%',
                                top: 60,
                                cursor: 'pointer',
                            }}
                        >
                        </div>
                    </div>
                )}
            />
        </ThemeProvider>
    );
}

export default FilterInput;