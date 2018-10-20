const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/';
const warnicon = "http://www.myiconfinder.com/uploads/iconsets/256-256-c7eba42ce12ae9b26d5e8379b73dd86b-Refuse.png";
const urbanlink = "http://api.urbandictionary.com/v0/define?term=";

// const items = [
// "https://cdn.discordapp.com/attachments/501361869706100756/502150588746694686/image0.png", "https://cdn.discordapp.com/attachments/501361869706100756/502141851546026004/Screenshot_20180619-124913.png", "https://cdn.discordapp.com/attachments/501361869706100756/502141850715684866/Screenshot_20180911-0733072.png", "https://cdn.discordapp.com/attachments/501361869706100756/502141850715684864/Screenshot_20180828-075059.png", "https://cdn.discordapp.com/attachments/501361869706100756/502137807842836493/image0.png", "https://cdn.discordapp.com/attachments/501361869706100756/502104161442070574/image.jpg", "https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg", "data:image/jpeg;base64,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", "https://cdn.vox-cdn.com/thumbor/ODsElrql357EFq7YBQ7UCrWmVaQ=/0x0:1570x883/1200x675/filters:focal(658x77:908x327)/cdn.vox-cdn.com/uploads/chorus_image/image/60394313/Untitled.1531838613.jpg", "https://i.redd.it/h4rntqluid911.jpg", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExISFRUVFRUSFRcVEhUVFRUVFRUWFhUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFRAQFy0dFx0rLSstKy0tKy0tKystLSstLS0tNzctLTctLS03Ny03Ky03LS0rKzc3LSsrLSsrKysrK//AABEIAOYA2wMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABQEAABAwIDBQQECQgGBwkAAAABAAIDBBEFEiEGEzFBUQciYXEydJGyCBQ1NnOBobGzMzRCUnKSwcIjJVRidYMVFiQmQ0SCF1NklKPD0dLx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQADAQADAQEAAAAAAAAAARECEiExE0FRAyL/2gAMAwEAAhEDEQA/ALpqWkBLXR5L9AowgVBxysMNPLKOLGFw8+SpPoV+MwQm0kjQ48G8XH/pGqiM2ppb6yOZ4yRvYPa4Bb3YbZWCmp2PLGvnkaJJZXgOe5zhc6ngBewCnYNi9FiDZRGGyNikdC8Oj0zDjxGo8Vjs7/jjCz4jEyPeukYGfrFwy68LFV3+ttD/AGmL95R9rcHZR4tSU8YtT1E0cwj4tY9r8rw0Hg03Gi69imHw7mU7qP8AJv8A+G39U+Cdif5/1yuTaqiabGpiv+0jbtPRlpd8ZisLA97qrzsLo434VGXRscd7Nq5oJ9PqQq3bGljG0WGNDGBpa64DRY6P4jmnY/HEIbW0P9pi9qk0ePUsptHPE49A4XXUq2CnijdI+KINY0ucd23QAXJ4Kpfg2HYhTh4ihkjkbdj2NDXDldrgAQQnY/HGVukzStaC5xAA1JJsAqrAM7N9TvcXuppnwZjxLRYtJ8bEKZs3gzcQrphP3qekyNEd+7JM4Zrv6gC2i1b4xOPuIX+tdLye5w6sje9v7zRZT8PxWCe+6ka+3EA6jzHFbrFcYo6N0EMgazfv3UTWx6F2nGw0HBVO3WyMUsTqiFgiqommSORgyl2UXyPt6TTbmszk6dIytZtFSwvySzxscOROo802zauhNyKmKw1PeVh2MPZUtrJXsY4unYdWg2vCy418UfahSRtrsJDY2AGpIIDQAfR46ap2ScIqxtfQf2mL95Lm2qomGxqYgdD6V+K6fimHQ7mW0Uf5N/8Aw2/qnwXPPg/0sb8OcXMY479+rmgn0W9U7L0iCNr6E/8ANRfvKxpa+KUXikY8c8rgVuK2ahZNHTSNgEswcY2GNvfDeNtFke0nZuKnhNfTMbFLAQ6TIA1ssRNnte0aHjcHwTsdFJNtRRMcWuqYgQbEZuBCk4fi8FRfcysktxym9lfdkNNFJhkb3RscXSTm5Y0mxldbiFT7SwtZjBDWtaPibDZoAF947XRJdS8Jh9JKO6F1rHIlBGgqSm2hKCiwVIKksddRnPSlV7UUzpKSZrdXFhIHiNf4K1so2IVbYYnyu9FjS4+Q5Is3XQ9mMQZUUkMjCCHRt+ohoBB8b3XOsWwLEcJM0uHFklPNJvpGOjzyxE8S0XGZo9qrMBOLU0m+o6CfcSkPfC+SPduDtc8fe7jj7F1LZXaWGujc6O4cxxjljdbNG8aFruvmub1Rx2aqqKurw+rmqIpctQyJgjjLLZnXdmBPG44LueK/kJfo5PdK5Nt5gjabFqCSIBsdTUMdIwaN3rHDvgcASHa+S61iv5CX6N/ulBhewX5Jj+lm99Vm2fzkwz9l33PVn2C/JMf0s3vqt20+cmF/su+56DoW1ULn0dQxoLnOhkaAOJJabAKn7LMOlp8Mp4pmljwCS08RdxIBWixatEMMkxBIjY55A4kNF7Bcmr+23Mz/AGeikDiNHSvaGjobNuSgiPxFkdbiNyNaon/02BaXsamDzXvHOpbr/lMXE31b3Oc97rvke6R56ucdV1/4P35Cr9YH4bU7Mye6Z7dKoRT4bKWucI5nSENGpDSwkDx0Sqjtwo3Nc34pWagjVkdtRbXvq92+xaGmrsPfOLscZogMod3n5Gt0PitfV0EW7d/RR+i79BvQ+CNOZ/B3banq/GcH2xtIU/tU/P8ACPWT/Kq74On5vV+s/wAgVj2qfn+Eesn+VB0LFvyEv0cnulc4+Dx8mv8AWH+6xdGxb8hL9G/3SudfB4+TX+sP91iC62m2cnnxWgqmBu6pxIZCTrdwIaAOfFOdrFYxuGVEZIzStETG83OeQBYJe0G1MlPidFRhjSyqEmYm+ZpaLgjwVf2uYFE6kfWBtp6W0zHjiQ06tPUEFA72KMy4TC08Q+YHzErgqXa35ZPqbPxHK77F5M2FQu6vmd7ZXFUe1/yyfU2fiPVjPL4XmQukBGStyvLdKKSiJSSmrjF0uJkcVawYuOqyQehvFNVvosTB5hM48/e0szBxdG4DztdYplS4c1Np8VcOKLHeNjq5k1FTyNIIMTAfAhoBH1EKg7O9j5qGatklewtqJjIwNJ0aXONz0Pet9S5pguLVNM5zqOcRhxzOikbnhLjxIFwWk+BWkG2OLyjKH0Uf99sT3O8wC6yzjv3iR2xYm1lXh3PczGoktrkjDmtLj0GpXTprSwuDSLSMIB4izm6H7VyWjwpt3vle6eWUWkkktdw/VA4BvgFDlxaqwxv+z1TTF+jBUNMgb4McCCB4JZiTnK6L2ZbOS4fQsp5S0vD5HEtNxZzrhYbaXEWS7T0LGEO3Pcfbk5zHuy362ss1iXaxikzSxpghB0Lo2Evt4Fx09iyNDXSwTMqI5P6ZjzIHvGe7nAgl1+OhKjWvUG2H5jU/QS+4V5XpHDI39kLU13aVissb4nTRFr2ljrQtBs4WNtVkYpMoDTwGgUpS5H2XW/g+4gwGqgJs8uZM0Hm3KGkj6wuQmyVQ10sErZYZHRyN9F7Tr5HqPBQj0R2j7HzV8tE+NzAIJs8mY65btPd6nu/atpVn+jf+y77ivPP/AGxYpu8lqbNa283bs3nbNa6rMP7SMUijMbahrmkuJL4w5xzkl1z9ZWtXW2+DxiLAKunJAe6QTNHVtspI9i3W2mzMtVVUEzHNDaaYySZjqW6ej1Oi820NVJE9skUjo5GElr2mxuePmNeC3lJ2vYoxuVwppOWZzHNd5nK6ympsdv2sxFkFHPLI4BrYn8eZLSAPMkhYf4PjSMNeDoRUPv8AusXLca2sq64j41KCxpzCKNuWMHkSL3cfNT9mNocQpWOjppmMjc8yWfCHnM619b+AVNjom3Xy9hH+b9xWk7Uvkms+hd/BcxmFdUzQ1clXGZoL7oinAa3NxzC+qn4pPidTE+CethdFIMjw2lDXFp42ObRXKnaNZ2H/ACPB+1L+I5SNq9hjVVPxptVLC4RCIhjWkEAl3MeKw+CjEaOIU9NWRNiaXFgfTB7hmNzd2bXUqf8A6Xxk/wDPQf8AlB/9kynaImzdU+SAF5zOD5Iyf1sjy0E+Ois1Cweh3EQZmzG7nuNrXc9xcTblqVKc5akcL9Kuiuos1WAoTsVb1CtNYQuS2uSLJJdZZMPlESmN6lsN1LTDjJCOCsqHEnNOpVaizK7jLbUeLDqsJtbihlmNr2boE3W4gWCzTqVUF5OrnWWeVdOEN7w8wUYcOrgg6UeJTZqPBZdcO3/vBC58D5Io3+XsU6mjLuX2WUtxcQ2Ru5fapDKQnjormnoNNQrCGhGhKz2XGaGHO5JuTDnjkVtWQAcktzG9E7Jjn5Y4aEFLaVsaqiY7kFQ19E5t7BXUxAa+yu8HxgN0eNOvRZ/mjaVqJZrrGBSBzSWkEX0srSy5js5j5gcGnVhIv1aumRVDXtDmkEHULpOTlZgzpxUWorgExidYGjisbiOJlxsCtVMamTGWjmFCqcdA5rIulPUpBcpotKzGHHgVANW7qmCkkosh9z02XInNSFkLBTrXWTLU5ZA4JURkTYCQ91kRW4gbPUMyKbVODioth0Wa6zw09xKAunCL8E7TR2OvFRpLoqS5WkoacAKHhdNzVwwgeSxWimReNk+AAFEkxKJuma58EUVY12oKyqSXapQIUWWUKrnxojQDVEXcgTEzQeKq48e6t9ikMxNjuoVFVimH2Nxw+5VjmFviFqZXhyo6qOxI5LUqVCJB4Lb7NYnkhyudw4LBPaeSlUtS4aXW5cc+UajFcTzGwKproi5JW3MtBAIIoJJKDim7oJZskhqYzlOMesmHQxLDUznR75Eh4tUGpaSpW9UaU31RYrphY2TDnFPTlM6c1l1hUakUrblQnS8gpmHm7gPFFaZkojZfnwUB+9fe5spk8QNu+zQcAblIMwaOI81huK5tJoSVIoZMpsfqSZq1vAX9iKLvWtxvbgotWMzzbgVUCME38dFq5YLx5SeVllpYnNuBrY//AIURJhgHh4oxCBfRRW1EltC1ONlfzy387IJVMx1jYEjqATZRq09VIpXv17zgOAsSAoVUbg9evVVFbKUy16TO4hMgrbK9gcCAnAquhn5KxzLUcqXdEk5kRK0gyiRZkSgdypTWoyklyBRTLilFyJAAU1M0nmnbhR5XqLEOUFMmMlPSGyZdIsukEQApuHM181XFyscOddwRpdiHMLD9H7U5HRZtWkDwPEeaVQtv7VLrctv48/asVqIjsOI9J7QE7SRNzZhfK3QE8zzKhwxhxvqR4klNV1RN6LNAPYstY0b6plrXCgzNa7VpF/vHQqiEj9Mx18EyIpM1891cTxbljP0oz9QunIoWu0DC0dTxPkFFsSNT3kumrHA2cfJFxOmhsLDgqmqFmlW75lXV5s0kcwnH6jM1JUcFS5RchNyxZTZwsujFHTv1CtiVWUsYBvxVojnyJF0tIzIg6+irJSNEChdVTznJsuSrJFkqQCUoFJKDVClOTL2py6ZqHaIsRZwoinhl0y5iNai2U2idYhR4m3dYKbT0xvcqNxf0klm6JqskLiADxSqFvdspBhB8wufJuXwI4g0CybmnZa3E+Ce+JX4uNvBPw0zWiwA/ipDfVOQD+gUtpI4R/ard7fBNliuteK9tUOBaQfJJe0O4BWV0TlKzaivaRYJir4KTK/molQbqxpTSwlR6kmwHRXEjDn0GnBVOJaPLRyW5XK+CpGE8FZNao9CLN81IC05UkompVkZCrIBBFdC6Bd0SQHpV0UaIIwjTDSLJLmap0NQyphpqRRZBZSZRqExMwnwUakQ2OyuB6ELRyubduX9UfaqKWl00N1LoZ8re9y4LLpKuaV1gpBlVZRVWYfWpZKxWotIxdKOihUNWOBKkyyXCgTJUJreKLK+xRNmsjSxDUxOU0aoJL5bqsmnlRXHU66af/Kemktqqypm7rj1KsXcTZ6gMGbNw4LPh5e8nqUCSdNVPhgDQtyOfLkciboPBOptHmV1xpV0C5FdJsmhRKKyCCiwoQk8Aj3LldtgDbNAzPPLk1R6qEMcO8C7mBwCzOctxu8ULcO6It27orJ4zcAU08BvE5jya0/eVq8pGZxtQbHoUklWTn5R3+J4MHLxKqaqcZ7GwBU48tWw0+YFwUaaXoQpk7WEtsRpxVXVx94lvBVZD7J0bpFADiE/A+5sQT4BMXMSWzFvDgplLiHVVrgRxFgjycwpjUq4M44hOCvPVUQe4JYlKnVVu6qumzMVAEhTjXEp1TUsSojVW5pi3VNxsDneCuKeMhfoPrTGIuAAYPNWLWgDRUte67j4KxKKnabqwYq+B5CmwvujnyOo0CgjAIIIIAgggixdibdsLr9+Tgeg5n61Uy1JupNfLmeT+iNB5BRZWgrPGY3yvp6KpvpdPMntwIHjbVU7rtKkRS3CuRNSzbidT4qDikNwCEJnc7pyKYOaQeiorGRAnQ+YUipiIsdLcAo0dw646qwLC9mgPd1UrpxV9RDfUJNM9zNQbJ8X6KORcqwqVI/MEzEUxvUtj0ZSDHfn7UfxcoopRwP1KaGo1ERsZClQtTm6SxHbgpqo9SDbRORs1BHknHNNuF05awU1qfCHGwJ6KjDcxOqsa+XuHqdFWQ6FajFOtFlKpglFgcLpULLBVytOoXSXoNCjJSCCCAIIIIsSN51CI5eqbE4OhTmRhRTc7AVXklpVgYyEzPFmCKYifrbqjh0eQVH5eIUtoBcx3XiimHHvqxppg1j/EWVZK7vpx71mzY1x+hK4nTXTh0UW6fcUw0Kz41zMvCcp7c/tQkam8qrJ6dqcpKnKbHgm2O0sU29hCC/ZJdOsCp6Cp4NKvYgs2Y0DhooUjibeSmTGwKig6JIWq+o7zgOiSaVOxt4lLuumOVoo22CWhdFdTGbRuKASTdAFMDhciBRIApgWgkXQBSAgxSMOwupnLhBBLNktmyNvlvwuilqWtb4rXdh+ObvE92TZtRG6P/rb32/xSOk4/1mKLD6qSR8TKaZ8kf5RjW3czl3hyTkOG1MkroGU0zpm6PjDNW/tcgvQmEYS2lqsSq3CwkLH3/utjBd9t1X9lLxJRS1lhvKieomc48SA85AfANACrXWOB45s7WUwzz0ssTTpmcAW+1twEdBgNY+ISspJ3xm7g9rLtyi9zf2r0JglS7EMIe+pDXGRk7TpYd0uDdOosEx2fD+oY/CnlHvqYZHnyPZytfGJ2UsxisX5wzu5Rzv0UWCF0ha2Npe55DWtGrnE8AAvROyY/3dZ6nJ9zlwrs9P8AWNCP/ERpiZ6hYvglVTtDp6eWIOOUF7bAm17BJwjBKqqJFPBJKRxyDQeZOgXZfhH/AJrTfTn8Nyv9gIxS4DHLE1of8XfOTbi85nXPVMavrz9jOz9XS2+M08kV9AXDQnwI0umsJwOpqiW08EkpHHILgeZOi9E4w749gBlnDXPkpBOTa1pMuYOA5apHZ1C2mwJksbQHmB85NvSfZxuevAKpkee8X2cq6S3xmnliB4Fze6T0uNE4zZqtMW++KzGLLnD8ndycc1+i9B1rzX7PmWoDXPkpDKTYAB4bmDmjlqFIwGmdLgEUbfSfR5B5uaQPvRXnCPZisfFv200xiy594Gd3KOJv0VjTYTXRQ72Sln3Ibn3mTuhpF81+i7H2rVjcPwVtLHoZGspmgfqhvfPsB9qs9o/m471Bn4bVMHDq2gqY497NTTxxG3fcyze96OvimMQw2pjhEz6aZkRy/wBI5tmEO9HXxXo3GMGFXhJgI1fSty+DwwFp9oCyfaewt2cYCLEClBHk5oKZExxLDqaSd4jhifK+xOVgubDibfWrGbZevY0udQ1LWtBcSY9ABxJV52Dn+tm/QS/yronbDtnU0Z3EUAfHLA/O8h5yXu06jQadVU6xxqTAaxsRmdSziINzl5Z3Q39a/REzA6wxb8Us5iLd4JMndyWvmv0su9bS/N1/qLfcCRQ/Npn+Hj8NDrHCIcDrHxCZtJO6Itzh4Z3S39a/RIgweqfFv2007obF28DO5lHE36Bd92R+b0fqb/dcl9ksDX4LAxwuHMkaR4FzgUOscApsJqnxGdlNM6KxO8DLss3ib+CepNn62VjZI6Ooexwu1zWXBHULuGF4YabA6qAi27bVtHlmflPsIU7YSodHgdPI0XcylLwOpAcQNEOsed66gmgeGTwyROIzASCxIva4UdXe2O08+ITslqIhE5keQNAcLgm9+8FS2KM8piFPqfBSsHndDPDMy945WO9jhcexPtiaVfiib8UJa25BDtONg4Erly59cenjP+XZ+1vFXRYTK9vGUMiHhvSAfsUbsZ+RWf5/vOWN7SNv6Otw4U0BlMmaE96JzRZh72pUTss7RIaGF1JVhwjzOcx7W5rZ9XNcB48101zyui9nHyKP2aj3notgPkFn0E33vWWx7tNw+non0uHBz3Oa9re64MZnvdxLuPEmyqezPtKpqak+JVoc1rczWvaMzSx5JLXAajidVUbvZL5us9Tk+5y4R2e2/wBI0P08f3rpm1HaXQRUDqPDg514zE3uuDI2nQm54mxOi5TsnXMp62mmkvkilY99hc5QdbDmiV2H4SH5rTfTn8Ny0WznzdZ6k73XKqxbtSwOoblma+QC5aH07iAbWuL8FQbBdptGylNFWBzYwZGMcGktdE9ziGuA1aQDZFbOi+bbf8P/APbStk/m7H6m/wB1yxe3HaXRCgNDh4c4OYIMxaQyOO1ja+pNkx2bdplLDRihrg5rWhzGvALmujde7XW1BFyg3OCH/dtnqDvcKtdh6kRYPSyO9FlMxx8gNVznbPtKoW0DqHDg5wdHuQcpayOO1ja+pNvvSqXtMoG4OKMul3wpTDbdOy58pHHpfmgtPhCYYZKGKobc7mTXmMsotf22V5tH83HeoM/DasjV9pmH1GFGkndKJnU4jdaIkCQNFiHeYCbxjtMoJMHdRtdLvjSthtuiG5wwA69Ljig6rS4g2GnpM3CQQxA9C5mn2i31rMdug/qiQD/vIfxAsRtn2l0c2HwQ07pN/C+nkF2FovFYnX6k52k9pVFXYa6niMm+c6J1nRkDuuBdr9RQUXYV8rN+gl/lW/7aNtfirHUe4z/GKd/fz2yXu3hbVcn7Lto4KKvFRUFwjEcjO60uN3WtoPJT+13aunxGpikpi9zWQmM5mFpzF1+BUHX9pPm6/wBRb7gSKH5tM/w8fhrI412lUEmEOo2mXfGmbCAYnBucNA9LppxSaTtKoBgzaIul3wpBBbdOy58mX0ul+ao2eyXzdj9Tf7rkjsxrhBgUMrvRYx7neQebrJYB2kUMWEMo3mXfCmdEQInFuYhwHe6aquwnbyjjwN1A4y78wyx2ETsuZ5Nu9w5oOw7XkHDqojgaeQ+d2HVU+wdVusDp5bX3dKX24XygmyxUPajSOwn4tKZfjBpjCbROLS/KWjvexP7HdpuGwYfBSz70uZEI5AIXObzuL8wg5vtjtX/pKobUboRZYhHlD83Ak34Dqqa603aJi2H1M0LqCLdsbG9slot3dxcLac9AVl7oxyOwuWxq/wCjpLDmAPaggvN/t+nfjfIybiotVGCEEF2rf6VzXWTsguLoIKshEe6hIy1teOqCCOF+kFBGgrEEUkoIKUG0pRQQR0nw0XafWm0EFWQSsqCCKTZORvsiQRD0lSSLanz1QpxdGgoiSClkoIKxigjCCCpgFCyCCI//2Q==", "https://i.ytimg.com/vi/GoUSf69AaBg/maxresdefault.jpg", "https://i.redd.it/qdwyrc6h3t111.jpg", "https://solifequotes.com/wp-content/uploads/2016/07/35-Hilarious-Memes-1-Hilarious-Memes.jpg", "https://imgs.chip.de/4cgK9bbLSbvxc034jnXFw6DfuPI=/0x530/filters:no_upscale():format(jpeg):quality(100)/www.chip.de%2Fii%2F2417690378_3b107ef161.jpg", "https://img-9gag-fun.9cache.com/photo/aoez85A_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aD10Xg7_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a0Q9E6d_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aKxzYd6_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aLgKXpP_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aVYO2gM_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/a735N1L_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aYYb1wN_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a9KdXPZ_460swp.webp", "https://img-9gag-fun.9cache.com/photo/ayB5Q88_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a83Wwqd_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aMZ1vWP_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aOYq1vr_460swp.webp", "https://img-9gag-fun.9cache.com/photo/apmqA1n_460swp.webp", "https://img-9gag-fun.9cache.com/photo/ayB5RZy_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aqKmWPp_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aNYe47r_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aD10Vp9_460swp.webp", "https://img-9gag-fun.9cache.com/photo/arGpBqV_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a4Q4qNm_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a0Q9E5q_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aWYZbrd_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a3QY2W7_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/a5Md2gG_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aD10VPG_460swp.webp", "https://img-9gag-fun.9cache.com/photo/az9bZXq_460swp.webp", "https://img-9gag-fun.9cache.com/photo/axzNRRM_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aGZ929K_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aVYOLBP_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aLgKmnM_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aGZ9A3n_460swp.webp", "https://img-9gag-fun.9cache.com/photo/av80R4d_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a83W2Ze_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aPYvQvG_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/av80Rpq_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aj8rZAp_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aOYqPdy_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aVYOLb8_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a2ZN2bw_460swp.webp", "https://img-9gag-fun.9cache.com/photo/amBXxDy_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a0Q9ngd_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aR1QvqM_460swp.webp", "https://img-9gag-fun.9cache.com/photo/apmqbmD_460swp.webp", "https://img-9gag-fun.9cache.com/photo/av80x4n_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aerNmAQ_460swp.webp", "https://i.imgur.com/4cDARsM.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7gLzdhMHNbdQJcCO-P_hgP3lBW2oS4ZOON6veanuw0iuy3ob"];

  client.on('ready', () => {
  client.user.setStatus('available');
  client.user.setPresence({ game: { name: 'Say /help', type: 0 } });
});

client.on("message", async message => {
  if (message.author.bot) {
  message.guild.channels.find("id", "501258481718788097").setName("Member Count: " + message.guild.memberCount);
  }
});

client.on('message', message => {  
    
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);   
     
    let args = message.content.split(" ").slice(1);
    var argresult = args.join('');
	
   //setnickname
	if (command === "setnick") {
                    if (message.author.bot) return;
                    let nickUser = message.guild.member(message.mentions.users.first());
                    let changeIn = args.join(" ");
                    if(!changeIn) return message.channel.send("Cmon, if you change someones Nickname already atleast give him one.");  
                    if (!message.author.bot) {
                        message.channel.sendMessage(nickUser + "'s Nickname was changed in " + changeIn);
                    message.member.find("name", nickUser).setNickname(changeIn)
                    }
               }

    //COMMAND - ALERT --- /alert msg --- posts a staff msg in "lounge"
    if (command === "alert") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
        client.channels.get('501251380833550336').sendMessage(`**Staff Alert:** ${args.join(" ")}`);
    }
	
    //avatar
    if (command === "avatar") {
	 if (message.author.bot) return;   
	 message.channel.sendMessage(message.author.avatarURL);    
    }
	
    //Facts
         if (command === "fact") {
         if (message.author.bot) return;
         if (!message.author.bot) {
           
         function random_fact(fact)
         {
   
         return fact[Math.floor(Math.random()*fact.length)];
      
        }
         const fact = [
		"In WWI, British armed merchant cruiser RMS Carmania engaged and sank the German merchant cruiser SMS Cap Trafalgar. Ironically, the two ships had been disguised as each other.",
		"Minecraft’s world is approximately the same size as Neptune.",
		"Place the word 'only' anywhere on the sentence: She told him that she loved him.",
		"The average Icelander loses their virginity at 15.7 years old.",
		"After leading the pack through the 2.4 mile swim, 112 mile bike, and the first 21 miles of the 26.2 mile run, John Dunbar lost his lead in the first ever Ironman triathlon because his crew ran out of water to give him, and switched to beer. He became drunk, and started running into parked cars.",
		"After 'Showgirls' flopped at the box office, MGM changed its marketing strategy to encourage ironic enjoyment of the film, which has resulted in over $100 million in DVD and video rental revenue.",
		"In the late 1940’s, comic books were seen as a direct cause of juvenile crime. Children were forced to burn their comics in schoolyards and a Senate hearing was held which led to the Comics Code Authority and later the Canadian ban of all comic books.",
		"Winston Churchill and Mahatma Gandhi were enemies. Churchill favored letting Gandhi die if he went on a hunger strike. During the Bengal famine of 1943, his response to urgent requests to divert food supplies to India was 'if food was so scarce why Gandhi hasn’t died yet'.",
		"The deepest note mankind has ever detected is a B♭ that is 57 octaves below middle C. The sound is made by inflating plasma bubbles in the center of the Perseus Cluster.",
		"Early humans used to run their prey to death. This method of hunting was called persistence hunting.",
		"When Russell Brand and Katy Perry divorced, Russell was eligible to claim half of the $44 million she earned during their marriage, but he declined.",
		"Between 1993-98, a majority of US Senators were trading stocks and beating the market by 12 percentage points a year on average. By comparison, corporate insiders beat the market by just 5 percent, and typical households underperformed by 1.4 percent.",
		"After the first Hiroshima atomic bombing in Japan, one Hiroshima policeman went to Nagasaki to teach police about ducking after the atomic flash. As a result of this timely warning, not a single Nagasaki policeman died in Nagasaki’s atomic blast.",
		"All the poop generated on the US Navy’s newest Gerald R. Ford-class aircraft carrier will be vaporized by plasma.",
		"A Missouri Man purposely damaged a levee on the Mississippi River to delay his wife coming home so he could party. He flooded 14,000 acres and was later arrested and convicted of causing a catastrophe and sentenced to life in prison.",
		"10% of people don’t like Cilantro because when they eat it, they taste soap.",
		"The sex of most turtles is determined by the temperature of the incubation of the eggs. Small changes in temperature can cause dramatic changes in the sex ratio. If eggs are incubated below 28°C, all turtles will be male. Above 31°C, every egg gives rise to a female.",
		"In 1984, a 1-year-old received a heart transplant from a baboon but ended up dying 21 days later due to rejection. When questioned with why a baboon and not a primate more closely related to humans, the surgeon said he didn’t believe in evolution.",
		"The Smithsonian opened an experimental museum in a predominantly Black neighborhood of Washington D.C. Many were skeptical that the Smithsonian would help the area, others worried about vandalism. The museum was untouched in the 1968 riots that destroyed other parts of the community.",
		"Foxes have a gland on the tip of their tails that has a number of different uses, one of them being creating volatile terpenes.",
		"Some farmers in Bangladesh have switched to raising ducks instead of chickens because, during catastrophic floods, ducks float.",
		"Bob Fletcher was a man who took care of the farms of three Japanese American families while they were interned during WWII. By keeping their farms running and paying their taxes and mortgages, he ensured the families didn’t lose everything. He was even shot at for supporting them.",
		"California law allows employees to take two hours paid time off in the beginning or end of the workday to vote on election day.",
		"When actor Raul Julia was terminally ill, he decided that his last performance would be as the villain in Street Fighter, as his children were fans of the game it was based on. The movie received terrible reviews, but Julia’s performance was critically acclaimed.",
		"To punish tree thieves who cut down trees illegally, some cities spray trees with fox urine around Christmas time. It freezes on them and is odorless outdoors, but would stink up your whole house if brought indoors; the smell is 'eye-watering.'",
		"Ludger Sylbaris was a man thrown into solitary confinement after a bar brawl, survived one of the biggest volcanic eruptions of the 20th century because his cell was bombproof and poorly ventilated. He became one of only three known survivors of the event, and his prison cell still stands today.",
		"Only 10 Scouts earned the Invention merit badge, which required obtaining a patent for an invention. It was discontinued in 1915 and is the rarest badge.",
		"Lucius Cincinnatus was a Roman statesman and military leader who was given absolute power to rule the empire when it was attacked. After his victory, he immediately resigned his post as Dictator and went back to farming. The city of Cincinnati is named in his honor.",
		"'Semantic satiation' is a psychological phenomenon in which repetition causes a word or phrase to temporarily lose meaning for the listener, who then perceives the speech as repeated meaningless sounds.",
		"Every high school student in Sweden aged 16-20 is entitled to 'study grant' of $139 USD monthly. The only requirement is to attend school.",
		"Car makers employ sound engineers to give car doors that satisfying 'thunk' when closed.",
		"Pete Best, the original drummer of the Beatles, moved to America shortly after Best’s firing from the Beatles and released an album titled 'Best of the Beatles' which confused record buyers and generated large sales numbers due to consumers believing that it was a compilation of Beatles songs.",
		"The 'Thagomizer', the spiked tail on a stegosaurid dinosaur, didn’t have an official name till the cartoonist Gary Larson did a comic about it, named it, and the scientific community just accepted it and started using it too.",
		"In 1867, a jar was found in Paris containing a human rib among other artifacts, and a label claiming that they belonged to Joan of Arc. Tests conducted in 2006 revealed that they came not from Joan of Arc, but an Egyptian mummy.",
		"The National Trust implores us to stop urinating in a toilet, in order to save the water used in flushing, and instead wee onto compost heaps, which speeds up the chemical process of decomposition, making it a better fertilizer to grow vegetables and save even more energy in reducing food miles.",
		"Charlie No-Face or the Green Man was an urban legend about a monster who walked along the side of a highway at night in Pennsylvania. In reality, he was a man named Raymond Robinson, and he went out at night so that his face, disfigured in a childhood accident, wouldn’t scare people.",
		"Adding an additional 20 minutes of commuting per day has the same negative effect on job satisfaction as receiving a 19% pay cut.",
		"In 1140, a German King captured a castle and ordered all the women of the castle to leave with whatever they could carry on their backs. Thinking quickly, the women carried their men on their backs. The King kept his word and let the men live.",
		"Charles Schulz always disliked the title of Peanuts, which was given to his comic strip by the syndicate. In a 1987 interview, Schulz said of it: 'It’s totally ridiculous, has no meaning, is simply confusing, and has no dignity and I think my humor has dignity.'",
		"Michael Jordan took home economics in high school to learn to cook because he was worried his big ears would make it hard to find a woman who would want to marry him.",
		"Within hours of its release in 1993, the video game DOOM was banned from numerous university networks as a rush of players overwhelmed their systems with deathmatches.",
		"The Code of Hammurabi (1754 BC) has 282 laws inscribed on stone. It includes the concept of 'eye for an eye' and 'tooth for a tooth' more than 500 years before the Torah.",
		"George Clooney had a cameo on South Park in which he provided all the barks, growls, and yips for Sparky, the gay dog in the 'Big Gay Al’s Big Gay Boat Ride.'",
		"Crows in urban Japan and the United States have innovated a technique to crack hard-shelled nuts by dropping them onto crosswalks and letting them be run over and cracked by cars. Then they retrieve the cracked nuts when the cars are stopped at the red light.",
		"3 cameras were standard in multi-cam tv filming prior to the 70s, then Garry Marshall needed the 4th camera to solely follow Robin Williams during Mork & Mindy filming since Williams was so unpredictable with his physical comedy.",
		"The movie 'Paranormal Activity' had a budget of only $15,000 but made $194 million. During the screening, people were walking out that one studio executive thought the film was bombing. They later learned that the viewers were actually leaving because they were too frightened.",
		"There is a monument in Georgia which gives instructions in 8 languages on how to rebuild society after an unknown apocalyptic event, whilst also functioning as a compass, calendar, and clock.",
		"Calvin Klein’s cologne 'Obsession' can draw big cats like Tigers, Jaguars etc from as far as half a mile, who then proceed to take long sniffs and cuddling against the source, savouring the smell much longer than they savour even their meals.",
		"Lynlee is the baby that was born twice. Pediatric surgeons, removed her from the womb to cut out a tumor on her spine, placed her back and several weeks later Lynlee was born healthy.",
		"In 1897, 3 Swedes attempted to be the first people to reach the North Pole. They traveled by hot air balloon but crashed after 65 hours. 33 years later, a ship discovered their camp, along with their dead bodies, journal, and camera. They’d survived for weeks by killing and eating polar bears.",
		"L. Ron. Hubbard’s own son, L. Ron Hubbard Jr. was highly critical of Scientology and claimed black magic was the inner core of Scientology once stating, 'my father did not worship Satan. He thought he was Satan.'",
		"The Old Testament says farmers should leave the edges of their fields unharvested for the poor and traveling foreigners to eat.",
		"After South Park aired the episode Chef Aid, the term 'Chewbacca Defense' entered the legal lexicon. The legal strategy aims to deliberately confuse juries than refute cases. The practice was widely used by lawyers before the episode, but South Park gave it a term.",
		"'Steve Jobs' is the name of an Italian clothing company created in 2012 when the creators realized that Apple never trademarked Jobs’ name.",
		"After Jean-Claude Van Damme’s biggest movie hit (Timecop 1994), he was offered a 3 picture deal at $12M per picture. He turned it down and demanded he gets the same deal as Jim Carrey $20M per movie. He was rejected and his career never recovered. He later admitted he 'acted like an idiot.'",
		"The Rock travels with a private gym of over 40,000 lbs. of equipment that over 100 crew members assemble at each film location.",
		"Devin Gaines earned 5 bachelor degrees with honors simultaneously at the University of Connecticut, averaging 24 credits a semester and 3 hours of sleep a night. He drowned in 2007 because he didn’t know how to swim.",
		"The term and concept of 'jay-walking' was introduced in the 1920’s by the auto industry as part of a propaganda campaign to claim the roads for cars and shift the blame in accidents from cars to pedestrians. At the time 'Jay' was a slur with a similar meaning to 'redneck' or 'hillbilly.'",
		"The human genome is 3.3Gb in size. HIV virus is only 9.7kb. Largest known virus genome is 2.47Mb (pandoravirus salinus). The largest known vertebrate genome is 130Gb (marbled lungfish). Largest known plant genome is 150Gb (Paris japonica). The largest known genome is 670Gb (Amoeboid) but is disputed.",
		"At the request of President Truman, Coca-Cola made a special clear version of Coke for Soviet Marshal Georgy Zhukov, so he could pretend he was drinking vodka rather than an American drink.",
		"Charlie Chaplin was criticized because he did not volunteer during the WWI. Although he registered for the U.S. draft, he received thousands of white feathers and angry letters. It was later revealed that he was rejected because he was undersized and underweight.",
		"Most cities have poorer areas in the east, due to prevailing winds carrying smoke and odors that way during the industrial revolution.",
		"At Jon Bon Jovi’s restaurant, JBJ Soul Kitchen, you can pay for your meal with either a donation or one hour of volunteer work in the kitchen. In 2014, JBJ served 11,500 meals, and half of them were paid for with a donation, and the other half was paid for with volunteer work.",
		"Jimmy Carter has been alive for almost 38 years since leaving office. This is the longest post-presidential time in U.S. History.",
		"Pink Floyd is inducted into the National Association of Brick Distributors’ Hall of Fame for their services to the brick industry through their 1979 album, 'The Wall'.",
		"Sergeant Stubby, a stray dog found during military training in 1917, served with the 102nd Infantry Regiment in WWI, saving them repeatedly due to his ability to smell mustard gas at a distance. After the war, he became a celebrity, meeting three presidents and traveling around the country.",
		"Before 9/11 there were only 16 people on the no-fly list. As of 2013, there are over 47,000 people now on the no-fly list.",
		"In 2009, British PM Gordon Brown hand-wrote a letter of condolence to a mother whose son had died in Afghanistan, in which he misspelled the son’s surname. The Sun (a tabloid) wrote a scathing article criticizing his mistake. In this article, the paper misspelled the same name.",
		"There was a bank robber dressed as Santa Claus who was responsible for the death of 6 people during his robbery and getaway. When he was caught and thrown in jail, nearly 2,000 people showed up, pushed past the guards, dragged him out of the jail and hanged him.",
		"During the making of rush hour 2, the secret service confiscated $100m in prop money after filming due to it being so accurate that extras were able to spend it at local businesses.",
		"Donnie Darko was filmed in 28 days which, coincidentally, virtually matches the time that transpired in the film. The movie took place between October 2nd, 1988 to the weekend party scene before Halloween on October 31st, 1988.",
		"Harper Lee’s friends gave her a full year’s salary for Christmas in 1956 so that she’d be able to take a year off from work to write. Lee used that time to write 'To Kill a Mockingbird,' which has since sold over 30 million copies.",
		"John Francis, an American environmentalist, decided to stop speaking for a day to learn to listen better to his opponents. He turned it into a 17-year vow of silence. During those 17 years, he went to school and even earned a Ph.D.",
		"1-800-COLLECT was so popular in the 90s that AT&T launched a competing service, 1-800-Operator. However, AT&T later discovered many people misspell Operator with 'er' instead of 'or' at the end, and that unfortunately, 1-800-COLLECT owned the misspelled number and had been taking their customers.",
		"Naked mole rats can survive 18 minutes without oxygen and suffer no lasting effects. They achieve this feat by switching their metabolism to use fructose, instead of glucose, something typically only done by plants.",
		"A Medal of Honor recipient from WWII embarrassed a sitting U.S. senator (who was also a KKK member) by publicly praising the efforts of African-American veterans.",
		"Arnold Schwarzenegger’s parents used to beat him because they thought he was gay since his bedroom walls were covered with posters of men instead of women.",
		"Bill Darden (the founder of Red Lobster) opened his first restaurant, a luncheonette called The Green Frog in Wayward, Georgia at 19 in 1938. He refused to segregate customers by race. Segregation was a state law in 30’s Georgia.",
		"Honeybees let out a 'whoop' when they bump into each other. This vibrational pulse, long thought to be a signal to other bees to stop what they are doing, might actually be an expression of surprise.",
		"Elton John answered an ad for a talent search. After failing the audition he told the person behind the desk that he can’t write lyrics. He was handed an envelope with lyrics by another person who answered the ad and failed the audition Bernie Taupin, who then wrote the majority of Elton’s songs.",
		"Joe DiMaggio was so devastated after Marilyn Monroe’s death that he had a half-dozen red roses delivered three times a week to her crypt for 20 years, never married again and his last words were: 'I’ll finally get to see Marilyn.'",
		"Britain’s power stations have to learn television schedules to anticipate when there will be a huge power draw as everyone turns on their electric kettles during a break in a soap opera or sporting event. ",
		"Japan has a sociological phenomena known as Hikikomori, in which there’s an estimated 1 million Japanese who choose to completely isolate themselves from society.",
		"There is a specific order to Adjectives for the English language. Native speakers can just tell if it sounds right or not, and it may not be apparent to non-native speakers at first, in general, the order is: opinion, size, age/shape, color, origin, material, purpose.",
		"The residents of a neighborhood complaining of mysterious ailments from a new cell phone tower. During a meeting, the owner revealed that the tower had been off for over a month. Residents didn’t show up to the follow-up meeting.",
		"Ernest Thompson Seton, one of the founding pioneers of the Boy Scouts of America, was presented with an invoice for all the expenses connected with his childhood, by his father, including the fee charged by the doctor who delivered him. He paid the bill, but never spoke to his father again.",
		"The code from the Matrix is actually a sushi recipe the production designer, Simon Whiteley, scanned from one of his wife’s Japanese cookbooks.",
		"The power button symbol is based on binary’s off (0) and on (1).",
		"After successfully winning the online poll to name the ISS module 'Colbert' after Stephen Colbert, NASA went with the eighth most popular name 'Tranquility'. To honor his winning, they named the new station treadmill Combined Operational Load Bearing External Resistance Treadmill (COLBERT).",
		"Japanese Yakuza have a unique form of extortion known as sōkaiya. Instead of harassing small businesses for protection money, the yakuza harasses the stockholder meetings of large corporations.",
		"Joey’s character in FRIENDS was not supposed to be dumb, according to the original script. It was only when Matt LeBlanc auditioned for Joey, he put a 'different spin' on the character, which was liked by the creators of the show.",
		"Lebron James was so hated back in 2012 that even a captured Al-Qaeda member wrote letters expressing his disgust at his decision to go to the Miami Heat. He told his lawyer that 'LeBron James is a very bad man and should apologize to the city of Cleveland.'",
		"Violent crime in New York City has been dropping since 1991 and as of 2017, is among the lowest of major cities in the United States. In 2017, there were 290 homicides, the lowest number since the 1940s.",
		"A 12-year-old girl named Martina Maturana saved much of her village’s population from being killed by a tsunami when she noticed boats moving up and down in the morning and ran to ring the warning bell.",
		"A small town in southern Kyoto, Japan has a yearly festival and monument next to a shrine dedicated to Thomas Edison. He used the bamboo from the town Yawata for his filament in the lightbulbs which increased the use time from 40 hours to 1,000.",
		"After firefighters saved piglets from a barn fire, 6 months later the farmer sent them sausages made from the piglets as a thank you gift.",
		"Infamous streaker, Mark Roberts, was sponsored by GoldenPalace.com to streak Super Bowl 38. He was paid $1 million, given front row tickets on the 50-yard line, and provided with one of the best defense attorneys in the U.S. who was able to reduce his charges down to a misdemeanor and $1,000 fine.",
		"The CIA parachuted hundreds of people into North Korea throughout the 1950s to start resistance networks and, despite never hearing from most of them again, continued to parachute more in until an inquiry in the 1970s questioned the morality of such an initiative.",
		"Firefighters in Pana, Ill found a cockroach infestation so massive that the city council agreed that the best option was to burn the house down.",
		"When NASA was preparing for Sally Ride to travel as the first American female astronaut, engineers initially were at a loss about how many tampons to send. 'Is 100 the right number?' they asked her. 'No. That would not be the right number,' she replied.",
		"Japanese researchers have created a fire-alarm for the deaf. It’s a gadget that emits a wasabi mist which will wake the endangered person and get them out of the building alive!"
];
	  	message.channel.sendMessage(random_fact(fact));
	 }
        }	
	
    //Insult
         if (command === "insult") {
         if (message.author.bot) return;
	 let aUser = message.guild.member(message.mentions.users.first());
    	 if(!aUser) return message.channel.send("Couldn't find user.");
         if (!message.author.bot) {
           
         function random_antwort(antwort)
         {
   
         return antwort[Math.floor(Math.random()*antwort.length)];
      
        }
         const antwort = [
		"Dumbass.",
		"You should wear a condom on your head, cause if your gonna act like a dick. You might as well dress like one.",
		"With a face like yours, I wish I was blind.",
		"You're so fat you need cheat codes to play Wii Fit.",
		"If you really want to know about mistakes, you should ask your parents.",
		"I could eat a bowl of alphabet soup and crap out a smarter comeback than what you just said.",
		"Hey, you have something on your chin...3rd one down.",
		"Yo mama so ugly she walked into a haunted house and came out with a job application",
		"We all sprang from apes, but you didn't spring far enough.",
		"Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it",
          	"If laughter is the best medicine, your face must be curing the world.", 
		"You're so ugly, you scared the crap out of the toilet.", 
		"Your family tree must be a cactus because everybody on it is a prick.", 
		"No I'm not insulting you, I'm describing you.", 
		"It's better to let someone think you are an Idiot than to open your mouth and prove it.", 
		"If I had a face like yours, I'd sue my parents.", 
		"Your birth certificate is an apology letter from the condom factory.", 
		"I guess you prove that even god makes mistakes sometimes.", 
		"The only way you'll ever get laid is if you crawl up a chicken's ass and wait.", 
		"You're so fake, Barbie is jealous.",
		"I’m jealous of people that don’t know you!", 
		"My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you're ugly too.", 
		"You're so ugly, when your mom dropped you off at school she got a fine for littering.", 
		"If I wanted to kill myself I'd climb your ego and jump to your IQ.", 
		"You must have been born on a highway because that's where most accidents happen.", 
		"Brains aren't everything. In your case they're nothing.", 
		"I don't know what makes you so stupid, but it really works.", 
		"I can explain it to you, but I can’t understand it for you.", 
		"Roses are red violets are blue, God made me pretty, what happened to you?",
		"Behind every fat woman there is a beautiful woman. No seriously, your in the way.", 
		"Calling you an idiot would be an insult to all the stupid people.", 
		"You, sir, are an oxygen thief!", 
		"Some babies were dropped on their heads but you were clearly thrown at a wall.", 
		"Don't like my sarcasm, well I don't like your stupid.", 
		"Why don't you go play in traffic.", 
		"Please shut your mouth when you’re talking to me.", 
		"I'd slap you, but that would be animal abuse.", 
		"They say opposites attract. I hope you meet someone who is good-looking, intelligent, and cultured.",
		"Stop trying to be a smart ass, you're just an ass.", 
		"The last time I saw something like you, I flushed it.", 
		"I'm busy now. Can I ignore you some other time?", 
		"You have Diarrhea of the mouth; constipation of the ideas.", 
		"If ugly were a crime, you'd get a life sentence.", 
		"Your mind is on vacation but your mouth is working overtime.", 
		"I can lose weight, but you’ll always be ugly.", 
		"Why don't you slip into something more comfortable... like a coma.", 
		"Shock me, say something intelligent.",
		"If your gonna be two faced, honey at least make one of them pretty.", 
		"Keep rolling your eyes, perhaps you'll find a brain back there.",
		"You are not as bad as people say, you are much, much worse.", 
		"I don't know what your problem is, but I'll bet it's hard to pronounce.",
		"You get ten times more girls than me? ten times zero is zero...", 
		"There is no vaccine against stupidity.",
		"You're the reason the gene pool needs a lifeguard.", 
		"Sure, I've seen people like you before - but I had to pay an admission.",
		"How old are you? - Wait I shouldn't ask, you can't count that high.", 
		"Have you been shopping lately? They're selling lives, you should go get one.",
		"You're like Monday mornings, nobody likes you.", 
		"Of course I talk like an idiot, how else would you understand me?",
		"All day I thought of you... I was at the zoo.", 
		"To make you laugh on Saturday, I need to you joke on Wednesday.",
		"You're so fat, you could sell shade.", 
		"I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
		"Don't you need a license to be that ugly?", 
		"My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.",
		"Your house is so dirty you have to wipe your feet before you go outside.", 
		"If you really spoke your mind, you'd be speechless.",
		"Stupidity is not a crime so you are free to go.", 
		"You are so old, when you were a kid rainbows were black and white.",
		"If I told you that I have a piece of dirt in my eye, would you move?", 
		"You so dumb, you think Cheerios are doughnut seeds.",
		"So, a thought crossed your mind? Must have been a long and lonely journey.", 
		"You are so old, your birth-certificate expired.",
		"Every time I'm next to you, I get a fierce desire to be alone.", 
		"You're so dumb that you got hit by a parked car.",
		"Keep talking, someday you'll say something intelligent!", 
		"You're so fat, you leave footprints in concrete.",
		"How did you get here? Did someone leave your cage open?", 
		"Pardon me, but you've obviously mistaken me for someone who gives a damn.",
		"Wipe your mouth, there's still a tiny bit of bullshit around your lips.", 
		"Don't you have a terribly empty feeling - in your skull?",
		"As an outsider, what do you think of the human race?", 
		"Just because you have one doesn't mean you have to act like one.",
		"We can always tell when you are lying. Your lips move.",
		"Are you always this stupid or is today a special occasion?"];
	  	message.channel.sendMessage(aUser + " " + random_antwort(antwort));
	 }
        }
	 
    //Jokes
         if (command === "joke") {
         if (message.author.bot) return;
         if (!message.author.bot) {
           
         function random_rjoke(joke)
         {
   
         return joke[Math.floor(Math.random()*joke.length)];
      
        }
         const joke = [
		"Did you hear about the restaurant on the moon? Great food, no atmosphere.",
		"What do you call a fake noodle? An Impasta.",
		"How many apples grow on a tree? All of them.",
		"Want to hear a joke about paper? Nevermind it's tearable.",
		"I just watched a program about beavers. It was the best dam program I've ever seen.",
		"Why did the coffee file a police report? It got mugged.",
		"How does a penguin build it's house? Igloos it together.",
		"Dad, did you get a haircut? No I got them all cut.",
		"What do you call a Mexican who has lost his car? Carlos.",
		"Dad, can you put my shoes on? No, I don't think they'll fit me.",
		"Why did the scarecrow win an award? Because he was outstanding in his field.",
		"Why don't skeletons ever go trick or treating? Because they have no body to go with.",
		"I’ll call you later. Don't call me later, call me Dad.",
		"What do you call an elephant that doesn't matter? An irrelephant",
		"Want to hear a joke about construction? I'm still working on it.",
		"What do you call cheese that isn't yours? Nacho Cheese.",
		"Why couldn't the bicycle stand up by itself? It was two tired.",
		"What did the grape do when he got stepped on? He let out a little wine.",
		"I wouldn't buy anything with velcro. It's a total rip-off.",
		"The shovel was a ground-breaking invention.",
		"Dad, can you put the cat out? I didn't know it was on fire.",
		"This graveyard looks overcrowded. People must be dying to get in there.",
		"Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, No, just leave it in the carton!",
		"5/4 of people admit that they’re bad with fractions.",
		"Two goldfish are in a tank. One says to the other, do you know how to drive this thing?",
		"What do you call a man with a rubber toe? Roberto.",
		"What do you call a fat psychic? A four-chin teller.",
		"I would avoid the sushi if I was you. It’s a little fishy.",
		"To the man in the wheelchair that stole my camouflage jacket... You can hide but you can't run.",
		"The rotation of earth really makes my day.",
		"I thought about going on an all-almond diet. But that's just nuts",
		"What's brown and sticky? A stick.",
		"I’ve never gone to a gun range before. I decided to give it a shot!",
		"Why do you never see elephants hiding in trees? Because they're so good at it.",
		"Did you hear about the kidnapping at school? It's fine, he woke up.",
		"A furniture store keeps calling me. All I wanted was one night stand.",
		"I used to work in a shoe recycling shop. It was sole destroying.",
		"Did I tell you the time I fell in love during a backflip? I was heels over head.",
		"I don’t play soccer because I enjoy the sport. I’m just doing it for kicks.",
		"People don’t like having to bend over to get their drinks. We really need to raise the bar.",
		"Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
		"I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
		"I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
		"My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
		"I'm so good at sleeping. I can do it with my eyes closed.",
		"My boss told me to have a good day.. so I went home.",
		"Why is Peter Pan always flying? He neverlands.",
		"A woman walks into a library and asked if they had any books about paranoia. The librarian says: They’re right behind you!",
		"The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me.",
		"Why do blind people hate skydiving? It scares the hell out of their dogs.",
		"When you look really closely, all mirrors look like eyeballs.",
		"What do you call a guy with a rubber toe? Roberto.",
		"What did the pirate say when he turned 80 years old? Aye matey.",
		"My wife told me I had to stop acting like a flamingo. So I had to put my foot down.",
		"I couldn't figure out why the baseball kept getting larger. Then it hit me.",
		"Why did the old man fall in the well? Because he couldn't see that well.",
		"I ate a clock yesterday, it was very time consuming.",
		"What do you call a frenchman wearing sandals? Phillipe Phillope.",
		"A blind man walks into a bar. And a table. And a chair.",
		"I know a lot of jokes about unemployed people but none of them work.",
		"What's orange and sounds like a parrot? A carrot.",
		"Did you hear about the italian chef that died? He pasta way.",
		"Why couldn't the bicycle stand up? Because it was two tired!",
		"Parallel lines have so much in common. It’s a shame they’ll never meet.",
		"My wife accused me of being immature. I told her to get out of my fort.",
		"Where do you find a cow with no legs? Right where you left it.",
		"When a deaf person sees someone yawn do they think it’s a scream?",
		"As I suspected, someone has been adding soil to my garden. The plot thickens.",
		"How do crazy people go through the forest? They take the physco path.",
		"And the lord said unto John, Come forth and you will receive eternal life. John came fifth and won a toaster.",
		"What did the traffic light say to the car? Don’t look! I’m about to change.",
		"I just wrote a book on reverse psychology. Do *not* read it!",
		"What did one hat say to the other? You stay here. I’ll go on ahead.",
		"Why wouldn’t the shrimp share his treasure? Because he was a little shellfish."
	 ];
	  	message.channel.sendMessage(random_rjoke(joke));
	 }
        }

    //Pickup Lines
    if (command === "pickup") {
        if (message.author.bot) return;
	let pUser = message.guild.member(message.mentions.users.first());
        if(!pUser) return message.channel.send("Couldn't find user.");
        if (!message.author.bot) {
          
        function random_item(items)
        {
  
        return items[Math.floor(Math.random()*items.length)];
     
        }
	const items = [
		"Do you have a Band-Aid? Because I just scraped my knee falling for you.",
		"You just turned my floppy disc into a hard drive.",
		"Let's play titanic. You'll be the iceberg and I'll go down on you.",
		"Girl, are those space pants? Cause your butt is out of this world!",
		"Your hand looks heavy, can I hold it for you?",
		"My doctor says I’m lacking Vitamin U",
		"I’m going to have to ask you to leave. You’re making the other girls look bad.",
		"Are you a time traveler? Cause I see you in my future!",
		"Are you african? Because you are a’frican babe",
		"Are you French because Eiffel for you.",
		"Is that a mirror in your pocket? Cause I can see myself in your pants!",
		"Are you religious? Cause you’re the answer to all my prayers.",
		"Hey, tie your shoes! I don’t want you falling for anyone else.",
		"You must be Jamaican, because Jamaican me crazy.",
		"What has 36 teeth and holds back the Incredible Hulk? My zipper.",
		"Somebody call the cops, because it’s got to be illegal to look that good!",
		"I must be a snowflake, because I've fallen for you.",
		"I know you're busy today, but can you add me to your to-do list?",
		"If you were a steak you would be well done.",
		"Hello, I'm a thief, and I'm here to steal your heart.",
		"Are you cake? Cause I want a piece of that.",
		"My love for you is like diarrhoea, I just can't hold it in.",
		"Are you lost ma'am? Because heaven is a long way from here.",
		"There is something wrong with my cell phone. It doesn't have your number in it.",
		"If you were a library book, I would check you out.",
		"Are you a cat because I'm feline a connection between us",
		"If I were to ask you out on a date, would your answer be the same as the answer to this question?",
		"If nothing lasts forever, will you be my nothing?",
		"I'm new in town. Could you give me directions to your apartment?",
		"I must be in a museum, because you truly are a work of art.",
		"You spend so much time in my mind, I should charge you rent.",
		"My lips are like skittles. Wanna taste the rainbow?",
		"Well, here I am. What were your other two wishes?",
		"Are you from Tennessee? Because you're the only 10 I see!",
		"Are you a beaver? Cause daaaaaaaaam!",
		"Life without you is like a broken pencil... pointless.",
		"Do you want to see a picture of a beautiful person? (hold up a mirror)",
		"Is your body from McDonald's? Cause I'm lovin' it!",
		"Even if there wasn't gravity on earth, I'd still fall for you.",
		"Roses are red, violets are blue, how would you like it if I came home with you?",
		"I wish I were cross-eyed so I can see you twice",
		"We're not socks. But I think we'd make a great pair.",
		"Your lips look so lonely…Would they like to meet mine?",
		"Are you a parking ticket? ‘Cause you’ve got fine written all over you.",
		"Thank god I'm wearing gloves because you are too hot to handle.",
		"If a fat man puts you in a bag at night, don't worry I told Santa I wanted you for Christmas.",
		"I'm no photographer, but I can picture us together.",
		"Do your legs hurt from running through my dreams all night?",
		"Pinch me, you’re so fine I must be dreaming.",
		"If you were a chicken, you'd be impeccable.",
		"How much does a polar beat weight? Enough to break the ice!",
		"Are you a 90 degree angle? Cause you are looking right!",
		"Nice to meet you, I’m (your name) and you are... gorgeous!",
		"If I were a transplant surgeon, I’d give you my heart.",
		"Are you Israeli? Cause you Israeli hot.",
		"On a scale from 1 to 10, you're a 9... And I'm the 1 you need.",
		"Did it hurt? When you fell out of heaven?",
		"If I could rearrange the alphabet I would put U and I together.",
		"Remember me? Oh, that’s right, I’ve met you only in my dreams.",
		"Is your name Google? Because you've got everything I'm searching for.",
		"Your hand looks heavy. Here, let me hold it for you.",
		"I’ve been wondering, do your lips taste as good as they look.",
		"Are you from Starbucks because I like you a latte.",
		"Are you a banana because I find you a peeling.",
		"Do you like vegetables because I love you from my head tomatoes.",
		"Have you been to the doctor's lately? Cause I think you're lacking some vitamin me.",
		"Do you generate electricity with water through the process of hydro power? Because dammmm.",
		"Do you like science because I've got my ion you.",
		"Are you my appendix? Because I don't understand how you work but this feeling in my stomach makes me want to take you out.",
		"Do you like sales? Because if you're looking for a good one, clothing is 100% off at my place.",
		"I know this is going to sound cheesy, but I think you're the gratest.",
		"If you were a triangle you'd be acute one.",
		"Does your left eye hurt? Because you’ve been looking right all day.",
		"My feet are getting cold… because you’ve knocked my socks off.",
		"Wow, when god made you he was showing off.",
		"If beauty were time, you’d be eternity.",
		"Is your name Wi-fi? Because I'm really feeling a connection.",
		"If looks could kill, you'd be a weapon of mass destruction.",
		"Do you have a tan, or do you always look this hot?",
		"Can I follow you home? Cause my parents always told me to follow my dreams.",
		"If I were a cat I'd spend all 9 lives with you.",
		"Are you a camera? Because every time I look at you, I smile.",
		"Are you from Japan cause I'm trying to get in Japanties.",
		"If you were a fruit you'd be a fineapple.",
		"I'll give you a kiss. If you don't like it, you can return it.",
		"Did you swallow magnets? Cause you're attractive.",
		"Are you from China? Because I'm China get your number.",
		"Do you have a name, or can I call you mine?",
		"Are you craving Pizza? Because I’d love to get a pizz-a you",
		"Wouldn't we look cute on a wedding cake together.",
		"Would you grab my arm so I can tell my friends I've been touched by an angel?",
		"Kiss me if I'm wrong, but dinosaurs still exist, right?",
		"Is your dad a terrorist? Because you are the bomb.",
		"You must be a ninja, because you snuck into my heart",
		"Can you pinch me, because you're so fine I must be dreaming.",
		"I may not be a genie, but I can make all your wishes come true!",
		"Are you Australian? Because you meet all of my koala-fications.",
		"I’m not drunk, I’m just intoxicated by you.",
		"If I followed you home, would you keep me?",
		"If you were words on a page, you’d be fine print.",
		"Are you a keyboard ? Because you are my type.",
		"There is something wrong with my phone. Could you call it for me to see if it rings?",
		"I've seem to have lost my number, can I have yours?",
		"If I had a garden I’d put your tulips and my tulips together",
		"Did you hear of the new disease called beautiful, I think you're infected.",
		"I thought Happiness starts with H. But why does mine starts with U.",
		"If you were a vegetable you'd be a cutecumber.",
		"You know what you would really look beautiful in? My arms.",
		"My mom thinks I'm gay, can you help me prove her wrong?",
		"I want someone to look at me the way I look at chocolate cake.",
		"Is it hot in here or is it just you?",
		"Are you going to kiss me or do I have to lie to my diary?",
		"Feel my t-shirt, it’s made of boyfriend material.",
		"You must be a magician, because every time I look at you, everyone else disappears.",
		"Your name must be Coca Cola, because you're so-da-licious.",
		"You're like a dictionary... you add meaning to my life.",
		"My doctor says I'm lacking vitamin U.",
		"Did your licence get suspended for driving all these guys crazy?",
		"Do you believe in love at first sight or should I walk past again?",
		"When a penguin finds a mate they stay with them for the rest of their life. Will you be my penguin?",
		"Can I take a picture of you so santa knows what I want for christmas?",
		"I'm new in town, could you give me directions to your apartment?",
		"I'll cook you dinner, if you cook me breakfast",
		"What does it feel like to be the most beautiful girl in the room?",
		"Good thing I just bought term life insurance … because I saw you and my heart stopped!",
		"If I had a dollar for every time I thought of you, I’d be in a higher tax bracket.",
		"Hey, my name’s Microsoft. Can I crash at your place tonight?",
		"Was that an earthquake or did you just rock my world?",
		"You’re so sweet, you’re giving me a toothache."];
        	message.channel.sendMessage(pUser + " " + random_item(items));
          
        }
    }
  
    //COMMAND --- HELP  
    if (command === "help") {
    message.channel.send({embed: {
    color: 10181046,
    author: {
      name: "Command List",
      icon_url: message.guild.iconURL
    },
    description: "A list of all HUB Bot commands",
    fields: [{
        name: "/help",
        value: "Don't have to explain"
      },
      {
        name: "/serverinfo",
        value: "Serverinformation"
      },
      {
        name: "/report @User reason",
        value: "Reports a user to the admins"
      },
      {
        name: "/meme",
        value: "Posts a random meme/video/joke"
      },
      {
        name: "/size",
        value: "100% accurate"
      },
      {
        name: "/insult @User",
        value: "Generates random insults"
      },  
      {
        name: "/pickup @User",
        value: "Generates random pickup lines"
      },  
      {
        name: "/joke",
        value: "Generates a random joke"
      },
      {
        name: "/shelp",
        value: "Shows all staff commands"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});
    }
  
    //D Size
    	if(command === "size") {
      		if (message.author.bot) return;
      		if (!message.author.bot) {
      			function random_dsize(size)
        	{
  
        		return size[Math.floor(Math.random()*size.length)];
     
        	}

        	const size = ["8=D", "8==D", "8===D", "8====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "8===========D", "8============D", "8=============D", "8==============D", "8===============D", "8================D", "8=================D", "8==================D", "8===================D", "8====================D", "8=====================D", "8======================D", "8=======================D", "8========================D", "8=========================D", "8==========================D", "8===========================D", "8============================D", "8=============================D", "8==============================D", "8===============================D", "8================================D", "8=================================D", "8==================================D", "8===================================D"];
        message.channel.sendMessage(message.author.username + ": " + random_dsize(size));
      					}
    				}

    //8ball
    	if(command === "8ball") {
      		if (message.author.bot) return;
		let questionball = args.join(" ");
		if(!questionball) return message.channel.send("That does not look like a question.");
      		if (!message.author.bot) {
      			function random_queball(qball)
        	{
  
        		return qball[Math.floor(Math.random()*qball.length)];
     
        	}

        	const qball = [
			"I don't know", 
			"Probably", 
			"Yes", 
			"No", 
			"I think so yes",
			"50% / 50%",
			"I would say so, yes",
			"Of course"];
        	message.channel.sendMessage(random_queball(qball));
      					}
    				}
	
    //COMMAND --- HELP  
    if (command === "shelp") {
    let adminRole = message.guild.roles.find("name", "➤ Administrator ✉");
    if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
    if(message.member.roles.has(adminRole.id)) {
    message.channel.send({embed: {
    color: 10038562,
    author: {
      name: "Admin Command List",
      icon_url: message.guild.iconURL
    },
    description: "(O) = Owner, (A) = Admin, (M) = Mod",
    fields: [{
        name: "(M) /kick @User",
        value: "Kicks a user from the server"
      },
      {
        name: "(M) /ban @User",
        value: "Bans a user from the server"
      },
      {
        name: "(O) /alert -msg-",
        value: "Sends a staff message to the #lounge channel"
      },
      {
        name: "(M) /clear X",
        value: "Deletes X messages"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});
    }
    }
  
    //SERVERINFORMATION
    if (command === "serverinfo") {
    message.channel.send({embed: {
    color: 10181046,
    author: {
      name: "Server Information",
      icon_url: message.guild.iconURL
    },
    description: "Everything you need to know about The HUB",
    fields: [{
        name: "Server Name",
        value: (`${message.guild.name}`)
      },
      {
        name: "Created On",
        value: (`${message.guild.createdAt}`)
      },
      {
        name: "You Joined",
        value: (`${message.member.joinedAt}`)
      },
      {
        name: "Total Members",
        value: (`${message.guild.memberCount}`)
      }       
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});
    }

    //COMMAND - REPORT --- /report @User REASON --- Reports a User and send the report to the report channel
    if (command === "report") {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
    client.channels.get('501801149071097866').sendMessage({embed: {
    color: 15158332,
    author: {
      name: "User Report",
      icon_url: message.guild.iconURL
    },
    description: "A User has been reported on The HUB.",
    fields: [{
        name: "Reported User",
        value: (`${rUser} with ID ${rUser.id}`)
      },
      {
        name: "Reported By",
        value: (`${message.author} with ID ${message.author.id}`)
      },
      {
        name: "Channel",
        value: (`${message.channel}`)
      },
      {
        name: "Time",
        value: (`${message.createdAt}`)
      }, 
      {
        name: "Reason",
        value: (`**${rreason}**`)
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});
    message.channel.sendMessage("*User has been reported!*");
    message.delete().catch(O_o=>{});
    }
  
   //COMMAND - CLEAR --- /clear [0] --- clears the amount of msg defined in the command
   if (command === "clear") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
        if(!message.member.roles.has(adminRole.id)) {
           return message.channel.sendMessage("You are not authorised to use this command!");
        } 
        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
   });
   }
  
   //COMMAND - KICK --- /kick @user --- kicks a user from the server
   if (command === "kick") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
	let kReason = args.join(" ").slice(22);
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        }
        if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("Please mention a user to kick");
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.channel.sendMessage("Invalid User");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.sendMessage("I don't have the permission (KICK_MEMBER) to do this.");
        }
        kickMember.kick().then(member => {
            message.channel.sendMessage(`*${member.user.username} was kicked!*`).catch(console.error);

	     client.channels.get('501801149071097866').sendMessage({embed: {
    color: 15844367,
    author: {
      name: "Kick Report",
      icon_url: message.guild.iconURL
    },
    description: "A User has been kicked from The HUB!",
    fields: [{
        name: "Kicked User",
        value: (`${kickMember} with ID ${kickMember.id}`)
      },
      {
        name: "Kicked by",
        value: (`${message.author} with ID ${message.author.id}`)
      },
      {
        name: "Kicked At",
        value: (`${message.createdAt}`)
      },
      {
        name: "Reason",
        value: (`${kReason}`)
      }      
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});	
		
        }).catch(console.error);
        }      
    
    //COMMAND - BAN --- /ban @user --- bans a user from the server
    if (command === "ban") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
	let bReason = args.join(" ").slice(22);
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        }
        if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("Please mention a user to ban");
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if(!banMember) {
            return message.channel.sendMessage("Invalid User");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.sendMessage("I don't have the permission (BAN_MEMBER) to do this.");
        }
        banMember.ban().then(member => {
            message.channel.sendMessage(`*${member.user.username} was banned!*`).catch(console.error);
		
	    client.channels.get('501801149071097866').sendMessage({embed: {
    color: 15105570,
    author: {
      name: "Ban Report",
      icon_url: message.guild.iconURL
    },
    description: "A User has been banned from The HUB!",
    fields: [{
        name: "Banned User",
        value: (`${banMember} with ID ${banMember.id}`)
      },
      {
        name: "Banned by",
        value: (`${message.author} with ID ${message.author.id}`)
      },
      {
        name: "Banned At",
        value: (`${message.createdAt}`)
      },
      {
        name: "Reason",
        value: (`${bReason}`)
      }      
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});		
		
        }).catch(console.error);
        }
  
});

client.login(process.env.BOT_TOKEN);
