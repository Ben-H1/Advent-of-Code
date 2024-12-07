const exampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const givenInput = `XMASMXMXMAXSMMSSSSXSXMASMSAXMAXAXXMASASMSXSSSSSMMXSXMASASMSMMXSASASXXXXSMSXSMSXMASXXMASMMASXMXSXMSMMMMMSXXMASASMSSSSSMMSMMSSMSMSSMXSAMMSMMMM
XXMSAMXSXMMSASXAAAAXMMMMAMXSMSMMSSMMMASXMAAAAASASMAAAAMAXXAMMAAXSASMMSAMAAAMASAXAMMSMMMMSAAXSAXASAMMMSAAXSAMXAAAAMMAAAAAAMMAAXMASAAMAMAMXMAM
SMMMXMASMMASMMMMMMMMMASMMMXAAMXMAAMMMAMAMSMMMMSXMASMMXMAMSASMSXMMAMAAMAMMMSMASAMASMAAAAXMAMMMMSXMASAAMXSXSAMMSMMMMMSMMSSSMSMMMMMSMAMAMASMSSS
XAAMMMMSAMASASXSAAAXSASAMXSMAMXMSSMXMSMXMAXASXMMAXMXXSMMMMASXXASXAMMMSAMXAXMAMXMAMMSSMMSMMXAAASMMAMMXMMXXSAMMAXASXAAAAXMAASAAXAXMAXSASXSAAAS
SSMSAAMSMMASMSASXSSMMASMMMMMSSMAAMMSMMASMSSMMAXXMXMXMMAXXMAMASAMXMXXAXXXMSSMMSAMXSAMXMSAMMSSMMSAMMSMSMAMXSAMSMMAXMXSSMXXMMSMMMMMSAMMMMMMMMMM
MMMMMXMSXMXSXMXMAXMAMXMAAMXAMAXMASAAAMXMAMAMSMMSMAMSMSAMXMASXMAMASMMMSXMAMAAAMASAMXSAMMAAMAAMASXMAAAAXMSASAMMXSSMSAMMMSXXXMASXSAMASMSAMMASAS
ASXSMSASXXMSAMXMSMSMMMMSASMXSAMXXMXSXMAMAMAMASXAXAXAXMASXSAXASXMMXAAAAXMSMMMMMXMMSAMAXMMMMSMMASXMMMMMMMMAXXMAMAAAMXXAASMSXSAMAMXMAMXMAMSAMAS
SMAAAMAMMMMMASMMMMSAAMXMSAMMXMSSSMAMAXMSSSXSASXMSMSMSMMSXMSSXMMSXSSMMSSMMXSASAMXMMASMMAAMMMAMXSXSASASASMSMSXSMSMMMMSMMSAMXMASMSAMSXMSSMMXXAM
MMMMMMMMXAAMXSAMMAXSMSXXAMSSSMAAXMASASAMXMMMASMXAMAXMAASAAXMXAXXAAXXXXXAAXMAXSAAXSAMAASMSAXXMAMXSASASAMAAAXMXXMMAXAAAMMAMMSAMXMMXAAASAAASMSM
SASASXSSXSMSASAMMMMMMXMMAXAAAMASMMXXXAXXAMAMXMXMMXXMXMSSMASMSXMSXMAMSMSMMSMMMXSMMAMAMMAMMXSAMXSAMMMXMAMMMSMAMXXXSXSSSMSAMAMASXMXMMMMSAMMSAAA
SASASAXAAXXMXSSMAAAXAAMSXMMSMMMMAXASXSXSASMSXMSMSMSXAXXXMMMMAAMMAXXMXAXAAXASXMAMMAMXXMASASXXMMMASXMMMMMXSAXSASMMXAAAXASXSMSXMXMASXSAXAMSMXMS
MAMAMAMMMMAMAMXXSMSSMSMMXAAXXSASAMXXAAASAMXMXSAAXAMSMMMXSAAMASASMMMMMSAMXSMMMSASXXMXXMAMXSSMXSMMMAASMMSMXAXXMAAAMMMMMMMAMXMAMSMXSAMAMMMXMXMX
SAMXMXMAMSSMMSSXMXXAMMASMMMXASAXMMSMMMMMXSAMMSMSMSMXMASAMSMSAMMMXAMXAXASMXMAXMAXAASXSAMXAMXMAXASMMASAAXAMSMSSSMMMXAXXXMXMSSXMAAAMAMSXSASMAMX
SXSMSASXMAXAAAAXMXMASMMMAAAMMMXSAAMASMAMASASAXMAAAAASMSAXXMMASMMSSMMSSMMMMSSSMSMAMMAMMSMASXMXMAMAMASMMSSMAAAAASMXSMSMXSAMXAASXMXSSXXAMAXXAMX
XSMASASXAMXMMMMXSMSAMAAXSMMSAAASMMXAMXAMMMAMMMSSSMSMSXSMMXAMAMAAAXAAAXMASAAAXAXAXXMAMAXMXMAAMSMMXMASXMAAXMSMMMAXASXAAXMXSXMXMASAXMAMAMXMSSXM
XSMXMMMXASAMMSMAXAMMSSMMMMXSMSXXMXMSSSSSSMXMAMXMAXAAXXMASXMMASMMSSMMSMSASMMMMXMXMXMXMMSMXXMMMAAMMMXSAMSSMMMXXXMXMMMMSMSASMAXSAMSMSMMAMXMAXAS
SMMSAAXSAXAAAAMMMXMMXAMXSAMXXXMASAMXAMAAAASXMSSSMSMSMSMAMMASASAMXMXAAAMASXAXMSMSMAMAAMAXMSMXXMXMAMSSXMAXAASMSAMXMAXSAAMAMAMMAMAXXMASXSXMAMMM
MAASXMAMSMSMSSSMASMMMSXAXASXMXSAMMSMXMMMMMXAAAAXMAXAAXASXSAMMMAMMMSAMXMAMMMXXAAAMASMSSMMAAAMSXXMAXAMXSASMMXAXAAMMMXSMSMAMSXMMMAMAXMAMSAMSSSX
SXMSAMXAXXAAXAAMXSAASMMMSAMMAAASXXAXMASMMMSMMMSMMMSXXXMMMMASXXSMXMAMXAMXMAMMSMSMSAMXMAMSSMSMAAMSSXMSAMXSMSXSMSMSSSMMSXMXMXAXXMSMSXMAMSAMAAAM
SAMXXXMASXMMMXMMASMMMXAXMMMAXXMAXSAMAMXAXMAMAAAAMMMXXMAAXXMMMAXAMSASXSXSSMXAMAMMMMMAXAXXASXMMSMAMXXMMSSMAXXAXXAAAAASAMXXMSMMMMAAXXSXXSAMMSMA
MAMMMXMXMXAAXSAMXMAXSSXMXMXSAMXMAMAXSSMMSSSMMSSSMAAAMSSMSXMAMXMAMSMMMXMMAAMMSAMXAMSMMMXXMMXXAAMAMASMXMAMMMMMMMMMSMMMXAAXXAMAAXMXMASMMSAMAMMS
XAAAAMMASMSMSAAXASXMMMXMXSAMAMMXSMMMXAAXXAAMMMMAXMMMMMXASASXSSMXMXAAASMSSMAMMMSMMMAMAMSAASMMSSSXSMXAXSXMXAAAAMXAMASXSMSMSASXSSSSMXMAASXMASAX
SXSMSAMXSXAXXMAMXXMAXSAMAMXMAASAMAMAXSMMMSMMAASMMXMXAXMASAMAAXMAMXMMMSAAMMSXAAXMXSASAAMSMAXMXAMXSXSSMMMMSSSXSMMMSAMAMSAAMAMXMAXMASXMMSXMXSMS
MAMXMXMXSXSSMXMXXXSSMAAMAXMXSXMASMMSMMMSAMXSSMSXAAXMXMSAMAMMMMSSSSXMASMMMXMMMSSMASMMMSXMSMSMMSMAMXMAAMMAAXMAXAMMMXMAMAMSMMMMMAMSAMXSASASMMXM
MXMASAXSMAXAAMSAMXXXXMXSSXSAXMMMMAAXAAMMXSAMMXMXSMSMSXXASMMMMMMAAMSSMXXAXXXAMXAMAMAXXMAXAMAMXMMASASMMMMMSXSASAMSMSSXSMAXXAAMASMXMXXMASAMAAAX
MAAXSSMAMAMMSXMASMAMMXXXAAMAMMAMXMXMMMXSAMXMSAMXAAAMMXSAMXAAAAMMMMXSASXMSSSXMSXMSSXMASMSMSAMAAMXMMSASXAXAAMASAMAAAMMXXSXSXMMAMXXMMAMXMAMSSXS
SAXAMXSXMASXXXSSMMXMASMMMMMAMXSSSMXSASMMASXMSASMMSMASMXXMMXMXSSXXAAMXMAAAXAMAMXAASXAXXAAASASMSSSSXMASASMMSMXMASMMMSSMMMXMASMSSSMMAAMASAXXXAM
AAMSMMMMSASMSASAAASXXAMXMASXSAASAAASXMXSASAASMXMAXXXAAMSMSSMSAMXXMXSXSMMMSAAMMMMASMSAMXMMMXXAAAMMAMAMXXAAMAMSXXXXSAXAAXASXMAXAAAMSASASMSAMXM
AXAXSAAXMAMAXXMMAMAXMXMAXAMAMMMMMMMMAMASXSMMXXXMAMMXMSASAAAMAASMXAAMXSXMXMXMAXXMXMAMMSAMXXMXMMMMSAMMMASMMSAXSXMMXMASMMSXSMMXMMMMMMAMAMXAXSMS
AXSXSSSXMXMSMMMXXAMSMSSSSSMSXSAXMXMSSMAXAXMAMXMMMAMMXMXMMMSMSAMXMMMSAMAMXMAXMAXMXMSMAMXXMAMXXASXMMMASXMMASMMMAMAXXAXAXSXMASAMXXMXXMMSSSMASAA
SAMXMAMXSAMAAAAAMAXAMAAXAXXMAMMXSAAAXMSMMMXMMAAAXAMSXMAXXXMAMXSAMAXMAXXMAMSSMAMMSAMASXAMXSXMMAXAAXSAMAAMAMXASAMSSMMXMXMASMMAMAMMSMAAAXAXAMAM
MAMXSAMXMASMSMSMSSMMSMSMMMSMAMAAXMMMSMMAAMMASXSXSASXMSSMSASXMASMMAMSAMSSXSAAXAAXMMMAMMASMMSSMMSSMMMSSSMMMMSXSMSXSMAASASMMMSXMASMMMMMXSXMASXX
MAMXMASASAMMMXMMXMXXAXAAXAASMMMSSMXXMAXSMMAMSAAASMMAXAMXAAMXSXMASXXMXSAAXMXMMSSXAAMASMAXAAAXAAAMASAXXAXXMASAMXAMXMMXSAMXAXXMXXMAAMXMASAMAMAM
SSMSSXSXMASAMAMMAMXXXSXSMMXSXAAMAMXMSSMASMSXSMMMSASXMMSSMSMAMAMXAMMMMMMSMMMXAAMMSMSAXMASMMMMXMMXAMMSSMMSMMSASAMXMXSAMMMMSMMSSSSSMSMMASAMASAA
AAAAAXSMSMMMMASMASXSMXAMASMXXMMSAMMXAAXSMMXAMXMXSAMXMXMAXXMASAMXMAAAAMXXAAAXXXSAXMMMXSAMASASMMXSAMXAAMAMAMSAMXXXSAMAMXSAAAXAAXMAMAMMMSXMASAX
SMMMSMXAAXAXSXSMASAAMSMMAMXAXXASASXMSSMXAXMAMXSAMAMXMASMMXMXSAMXXSSSMSASXMSSMMMASMXMAMASAMXSAAASAMMXMMASAMMAMXSMMMMSXAMSSMMMSMXAXASAMMAMASMS
XMXMAXMMMSSXMAXXMMXMMXAMXMMMMMMXXMAXAAASXMSXMXMASXMASASXSMSMMXMAXMAMAMMSXSAXAAMXMMAMXSAMXSSSMMMSAMAMXSASASXMSXXAMXAMMXMAMASAAXSSSMSASXXMMMAA
AMASMSSXXAMASMMMXSSSMSSMSXAAXASMSSSMXXMAXAXMMAMXMMMXMASAMAAASXMXAMAMMSMMMMASMMSXMSMMAMASMSAMXMASAXMAXMASAMXAAAMSMMASAAMSSXMAXMAXAMSAMAMSSMSM
XSAXAMAXMAMAMAAXXAAAASAAXSSXSMSAXAAXMSSSMSMMSASAAAAMMAMXMSMXMAMMMSXMMAAXXMAMAAAMXAXMASAMXXMXMMXSXMASMMMMMMMMMMMAAMASXMMAXMASMMMSXMXXMAMAAMAX
XXMSXMMMMMMXXXMSSMSMMXMMMXXXMAMXMSMMXAAXMASASASMSMSXSAMAMMMSSMMMXMASXMSMAMSSMMMSMASXMMMXMASAXXAMXAMAAAMAMAMAAASMSMASAMXXAMXXXXAAAMSXSSSSXMMX
MAMSXSXSAASXSAXAAXMASXSXSAXMSMSAMXXXMMSMSAMXMXMAMXMMXASMSAAAAAAXXMMMSAMXMSAMXSAMMMMAASXSSSSMSMASMSSSSMSASXXMSXSAAMXSAMSASASXXMXSXMSAMXAXXMXM
MAMMAXASAMXAAAMSSMSXSASASASMASMXSAAMXAMAXXMXSMMAMMSMSMMXMMXMXMMSXASAMXMASMASAMMMSAMXMMAAXXMAXMAMAAAMAASMMXAAXXMXMSAMXAXAAAMMSMMMMAMSMMMMXSAA
SMSMSMMMMXMXMXAMXMASMAMAMAXMMMXMMXSASAMXAAXAXAXAMAAXAAASMSSSXMASMMMAMXMSXSAMASXAXMSMSMMMMMMSMAMSSMSMMMXMASMXMAMAXMXXMXMXMXXAAMAAAAAAXAAXXSSS
XXXAASMASAMMMXXMSAMXMAMAMMMMXMAMSAXXMAXXSSMMSMSSSSMSSSMXAAAAAMASAMSAMSXMXMMMAMMMSMAMMASAXSAMAMXAMXMAMAMMASAMXMSSSMSXSMMAXSMSSSSMSSSMSSSMMMAM
MXMMMASASAMSXSXAAAXMSASASMAMAMMXMASASAMXAMAMMAAXMAXMMAXMMMSMXMASMMMAXMASMSMMSMSXAMMXSAMXXMASAMMXSXSMMAAMASAMMXAAAXAXMASMSXAXAMAMAMAXAAMAAMAM
SAMXAMMXMXMSASAMSMMXXXAMXXAMSMSXSASXMASMASMMSMMXSXMSSSMMSAMXXMXSXXSMMSAMMSAAXASXMSMAMASXSMAMAXAASAXMSMSMASAMAMASMMMMMMMSAMXMAMXMASMMMAMSMSAS
SMSMSSMMSXXMAMXXAAXSXMXMAXMMMAMAMAXXMMXMMMMXMAAASMMXAMAAMASMSMMMXMXAAMAXASMMMXMAXXMASXMAAMAXMMMXSAXXAMAMXSMMSAAAXXXAAXMXSXMSMMMSASMSXMAAXAXX
XASAMAMMAMXMAMSSSMMXAAAXXMMAMAMXMXMMSSXXMAMXXMMMSAMMMMMMSAMAMAASAMMMMSSMASXXXSMMMMMAMAMAMSSSSSXMMMMSASASMXAAMMSXMASXMMSAMMXAXAAMASASASXSMMMX
MAMAXAMXAMXSMSAMAXAXSMMSXSMASMMSMMMAAXMASXSMSSXASXMAXXMAMMSASMMSASAXMAMXXXXXASASASMMSAMAXAMXMAXSASXSXMAXAXMMSAMAMXSAAAMAMASMSMSMAMASAMAXXMAX
SXXSMMXMAXXMMMMSSMMXXAMXAXMAMAAAMAMMXSMXMMSAAXMMMASMSMMXSASXSAAXAAXXMAAMMMSMAMAMASAMSAMXMSXSSMXMAXAMXMASMXSAMAMAMASMMMSAMXAMAMAMXMXMAMXMASXS
AXAXASMSSSMSAAAXXASASAMMMMSMMMASXSSMXMASXAMSMXSASAMXAXMMAMXAMMSMSMSXSASAXAXMXMAMAMAMMSMXMMAXAXXMSMSXXMXMMAMXMSMSMXXAXMSMMMSXSMXSASMSMSASMMSS
MSAXAMXAXAAMSMSSMXMAXXMASAAAXXMAMAAMMSAMMXXAXAMXMASXXMXAXXMMMXAXXASAMXMMMMSXXSXSASXMXXXMAMXMMXMAMAAAMSMSXMASAAAXMASXMMMSAAXAXMMSAXAAAMASXMAS
XAXMAMMMMMXMXMAMXXXSXSXMMMXXMAMSMMMMMAAXAMAMMMXASMMMSSXMMASMAXMMMMMXSXMASMMXXSASXSMSAMASASMSXSXSMXMXMAASAXAXXMMMMAXMAAAXMSMAMAAMSMSMSMXMXMAS
MAASAMSXXXAMXASXMSAMAMAAASMSXXMXAXMXMMMMMSASAMSMXMAASXAMSASXSSXMAXMXMAMAMAASMMAMXXAMASAMXMASAAAXXAMASMSMMSSSXMMXMASXSMSSMAMASMMMAXXAXXXAAMMS
ASMAMAMAMSMSAAMAMSAMAMSMMMAAMSASMMSAMAXAAMASMXAAMXMMSMSMMASMXMASMMSASXMXSMAMXMAMXMSSMMMSAMXMSMSMSMSASXMAMAAAASMMMXAMXAMAMXSASAMSSXMMMMXSXSAM
XXXASAMXMAMMMSMXMMAMXMMASMMMMSASAAMAXSMSSMAMXSMXSAASXAMXMAMAAMAXAASASAXXXMXMASAMAAXAXMMSXXSAMXMMAMMXSXSMMMSMAAAAMSSMMMMMSXMXSAMAXASXSMAXAMXS
MMSXSMSMSSSMSAAAMSMMXMMAMMMSXMMMMXMSMXAAMMSMXXAAMXMMMMMAMXXSAMXMMMMASMMSXMASASASMMSAMSXMASMMMSMMSSMAXXXASAXXMSMMMAMXAAAXMMAMMXMASXMAAXASASAS
XAMXMMMXMAAMSSMMMAXMASMMMMAAAXSASXAAAMSXXMAXSAMXSMMSAMSSMAXMASMMMAMXMMAMASAMXSAMMAXMAXASMMSMAMSAXAMXSAMXMASXXMXSMSSSSSSSXMAMXAMMMAMSMMMMAMAS
XXXXXAMAMMMMMMMSSMXSAMMSAMXMMMSASMMMXMAAMAMASXSAAAAXAXAASXXSMMAMSSSMMMASMMMSAMXMMXMASMMMXAAMASMXSSMXSMMXMAMMMSAMXMAMAAAAMSASXAMMSSMMXMSMAMAM
ASMXSASASASXXAAMASAMAMAXMMSMSAMXMAMXAMMMMAMMSAMXXMMSSMSXMMMAMXSXAAXAAXXXMAMMMSAMMSASAMXAMSMSXSMMMAMXXAMXMASAXMASXSMMMSMMMXAXMAMMAMAAAAAAMMMS
XAAASXSAXASMSMMSAMXSXMSXSAMXAMMAXXMMMSAMSXMMSXXMXSAXXAXMSXMMAMXMMXSSMSSMSSMAASASAMXASXMXXMASAXMAMAMASMMAXAMMMSXMAAASMMAMSSSMMAXMAMMMSSXSMAXX
SMSMSMMXMSMMASMMMMXAAMAAMMSASMSMSMXSAMAXMAAAXMASXMAMMAMAMAMSMMASAAMAMAAAAXMMMSMMASMAAMMMAMAMAMSSSXMMAXXXMMSXXAAMSMMMAMMMAAAMMMSSSMAMAMAAMXMX
XAAXXAMMXMASMXXAXMMMMMAXMAMXMAAMAAXMAMXMMXMSMMAXMXSXXMMAMAMAASASAXMAMSSMMSAMXSAMASAMXAAMXMSXSAAXMXSMMMXSSMAXXMMAXAMMSMAMMMMMXXXAXMAMMMSMMSMA
MMMXXSMXASMMXMMMXSAXMXXMMXMAMSMMMXSSSMASASXXXMASMAMAMXSMXMMSXMASAMSSMMMAAXMMASAMAMXSSSSXSMMAMMXXSAXAXAASAMXSSXSMSAMAMMXSSMSMMXMXMSXSXAXMXAXM
XMAMXASMMSAAXMASASMSSMSMSAMXXAMXXMAAAAXMASAMAMASMXSAAXXAASMMMMXMAXXMASMMMSSMASXMASAMAAMMSAMXMSMAMMSMMMXSAMAAXAMASXMXSXAAAAAMMMMAAAMXMXSASXSM
XMAXXAMXXSMMMMAMAXXXAAXASMSMSASASMMSMMMMXMAMMMMXAXSMSMMMMMAAXAXSXMASAMXAXSXMASAMAXXMMMMAMAMAMAMMXAAMASASXMASMSMMMASAMMSSMMMSAAMMXMMSMMAMSASX
SMASMSMMMMMSXXSMSMXSMMMMMAAASAMAAAAAMXSXAMXXXASMMMXMAMXSASMMMSMAXAXMXSSMMXAMAXAMMSSXAAMXMMSSSXSAMXSMASMXXMAXXMAXSAMASAMXXAASMSXSXXAAAXMXMAMS
AMAMAAAAAAAAXSXAAAMXAAMXMMMMMMMMMMSMSAMMMMMMSASAAAAXASXMAAXAAAMMSSXMXMAXMSMMMMMMSAMXSXSSSMAASAMASMAMAMMSMMAXASAMMXSAMXSSMMXSAXAAXMSSXMXXMAMX
MSAMSMSSSSSSMXMSMXASMXSAXAMXAXXAXAXXMASASASXSMSXMSMXASXMAMMMSSMXAMXMMMSAXAMASAAMSAMXXAAASMMMMXSAMMAMXMSAMSSMMMAMAXMAXMMXAXAMMMMMSMAMAXXSXXSA
XMAMXAAMXAAMAAXAAAXXMASMSMSSSMSSMMSASXMASASAXASXMAXMMMMAAXMAXMMXMXMXMAMMSASASMSMXASAMSMSMXMXXAMASXSMSMSAXAAXXMMMMSSMMAAXSMMSASAAAXASXXMAMAMX
XXMMMMMSMXMXSXSMSMMAMMSXMAMAMAXXAMSMMSMAMMMMMAMXMASMAAMSSSMMSASXXXSAMXSXSAMASAMASMMAMMXMAMSMMXSAMXXXSASMMMSMSMAAXMAXSMMMXAXMASMSMSMSASAAASMS
SMSAXMAXAAMXMAMAAASMMMSAAAMMMSMSSMMAAXMSMSASMMMSMXSXSXXAMAAAMAMXMASASMMAMXMAMAMAMMAMMMMMAMAAXAMAMAMXSXSMSXMAASXMSMXMMAMASMMMAMMAAXXMAMMSMXAX
SASXSMSXXAXAMAMSXXXXSXSXSXSXAMMAAASMMXMMXMAMAMXXXXMAXMMSXXMMMAMXMAMXMMAAMMMMSAMASMAMMXMSAMMSMXSAMXSAMMSAMMMSMXSAMXXAXAMMXMAMSSSMMMMMAMXXAXMX
MAMASAAAMSXSMMMXXMASAAXAMMAMMMSSSMMASMXMXMMMXMXSASMMSAMAASXSMSAXMSSSMSXMMXAAXAXASXXMXAMMAMSAMXMAMAMASAMAMMAXASMMMMSSSSSXSSSMMAAAXMXSASXMSMXM
MSMMMMMSMMAXXAAXSASXMXMAMAXXMAMAMASAMXAMXMSAAXASMXAASAMMSMAAAXASXAAXAAXSXSMSSXSXMXSSMXMMAMXAMMMSMSXMMMMMMMASXMAXAXXAAXXAMAAASXSMMMASMSMAAMAS
XXAXAXSAAMAMSMMSAXXXXSMXMSMSSSMAMAMASXXSAAMSSMAMXSMMSXMXAMSMMMAMAMXMMMSXAAAAMMAMAAXXAASXMMSSMSAMMXAXSXASMMMSASXMMMMMMMMMMSXMMAXASMASMSMSMSAS
XMMSSSSMMMSMXAXAMXMXXXAAMMAXXMXXMASXMXAMAXMAMMXMAMXXMASMMXMXSMSMAXASAMMMMMMMSSMAMSSMSMMASAAMXMASAXMMSMMMASASMMSXAAAAAAAXAMSMMAMAAMASAXAMAMXS
MSAAMMMAAAMMXSMMXMASMMMMSMSSMMMSMMXMAMXMMMMASXSMMSXSXSAMXAMAXAASXMASASXAXSXAAAXSMAAAAXSAMMXMAMSMXMSAMXXXAMMXAASXSMSMSSSMXXAXMAXSMMASMMMMXMAS
SMMXXAMSMMMSAMXXMAMMASAMXXAAAAAAAMASMAAAXAMAMXMASAASMAMSXMSAMSMMXMASAMXSMMMMSSMXMSMMSMMXSMXSXSAASXMASMSMMSXSMMSAMXMMAAAASMSXSAXAXXAMXMAAAXXX
MASXSMXAAXAMMSMASAXSAMAXXMXSSMSSSMAAASASXSSSMMMXMMXMASMMAMMMAXASXXMMXMAXAXXXMAMXMXMAMAMXMAASMSMXMASAMAAAXSXSAAMAMAMAMMMMMAAMXMASAMMSMMAAXMMX
XAAMASMXSMSSXXMAXMMMMSSMASAMXAXAAMMMXXSXXXAAMSMSAXMMAXASMMAMAMMMXAXSAMXSMMSMXXMAXAMMSAMAMMMSAMXASMMAMSXSMMASMMSSMASMAAXXMMMMAXXMMMAAAMSMMAAM
MXSASASAAAAMMAMXXSSMAAASAMXSAMMSMMMXMXMMMMSMMAAXASXMASXSASXMXSMSXMMMMSAMMAXAAMSSMXMAMAXAXAMMXMMXMASXMMAMXMAMMAXASXXXSMSMSAXMXSMSSSSSSMAASMMA
XXAMXAMMMMMSAMXSXAAXMSMMMMXSASAXMAXAMMMXSAMASMSMAAAMXSASAMXSAMMSAMXAAMAMMXSMMXAMMSMMXSSSMSSSSXXASXMAAXSXMMXXMXSXMSMAXAAAXXSAAAASAAAAMMSMMAAS
MMMMMAMSXSMMMMAAMSMMMXMXAMXSAMASXMSASXAAMASAMXXXMSXMMSXMAMAMMSAXAMSMSSSMSASASMMSAMASAXAMAAAAAASXMSAMXMAAMXMASASMAMMSMSMMMAMMXMXMMMMMMMMMAMXX
AXAXAAXAASXSAMSSXXAAXAMMASXMXMAXAAMAMMMMSAMASAMXMMAMASXSSMMSAMASMMXMMAMXMASAMXXMASAMMMAMMMMMMMSAMAMXAASXMAAMSAMMAMAAAMAXSAMAXXASAMXASAXMMMMM
SSSSMMMMXMASMXAMMSMMMAMMAMMSSMSSMSMMMXXXMASAMXASAXAXXSAXAAXMASXXAAAMXSSXMXMMMXMSMMASMMMMAXAXXAXXMAXSAMXASMMXMAMSXSSXSMSMSASXMSAMASXXXMMSAAAX
MAMAASMSAMAMXMASAXAASASMAXAAAAAXAXXXASMMSXSXMASMMXXSAMMMMMMMAMXMMSMSAAXXMAXXSXMAXMAMAAMSMSMSMSXSSXMAMXSAMASXXAMXAAAXXAMAMAMAMMAXSMMSXSASXXMX
MAMSMMAXMSASMMAMMSSMSAXMMMSSMMMMSMAMMSAASASMMXMAMASMXMXAASMSMXAAXAMMAMMAMMXMMASXSMASXSMAMMASXAAMMMMAMAMASXAASXMMMMMMMAMSMSMMMMXMAAAXXMASMSSM
MAMXXMAMXSXSAMXXXAMAMXSAMXXMXMXAASAMXSMMMMSMXXSSMMAAAXMSMSAAMSMSMXSAAMMAAAMMSXMASMMSAAMMXMAMMMSMAASAMXMAMXMMMMASXMAAXAMXAXAXSXSASXMSAMXMMAAM
MSMSMAAAXMASMMMSMMMAMXSAXSAMASMSMSXMAMXSSXMMSXAASXMSMSMMAMXAMAMAMMXXASXSMXXXAXMXMAXMMMMMAMMXMAXMSMSASAMASAXAAXSMASMMSAAXSMSMAAAXMXAXXSSSMSSM
AAAAAMXXMMXMMSXAAASMSXXAMAASASXXMSAMMSMMSXMAXMMMSMMAMXAMXSSXSXSASMAMXMAMAMXMAXSASMMMMSSSXSAASAMXAMSMMASASMSSMSAMXMAASXMXXAMAMXMXSXMMAAAMAMXM
SMSMSXMASXMSAMSMSMSAMMMSMSXMASAMASAMAAAASMMSSSMAMXSAXSXMMAXXXAMAMMXMXSAXMASMXMAAMXASAAAAXMMXSMXXMMMSSXMASAAAMSMAXXMASAMSMSMAXAXMAMMASMMMAMAA
MAMAXAMASAAMAXSXMAMAMMAMAMMSXMAMMSSMSSSMXASXAAMXSASMMMXSAMMMMSMSMMSMMMXMXSXMMMMMMSSMMSSMSSMXMMSXXMAAXXMSMMMSMSSMXMMMXMMAAXSXMSXAMAXAMASMMSAM
SAMXSAMASMSMMMXAMXSSMMASAMAXXSXMMXMMXAXXMMMMSMMXMMXSAMXMMXAAAAAXMAMSMSSMXMASAMAMXXAXXXAXXAXXAAMAMMMMSMMMAMMAMXMMASAMSAMXSAMMMMASXSMMXXMAAXAX
MXSXSXMASAAMAMSXMMMMASASXMASMAASXAXSMMMSSXSXMASMMXXSMSAMASMSXMMMXASXXAMMMSAMSXSMXXAMSSMMSMMSMMXSAAMXXAXSAMXAMAAXAMAMXAMXMMMMASMMMMASXMSMMSXM
XSAMXMMAMMMSAXMASAMSAMMSAAAMASAMMSSMAAAXXXAASXMASAMMMSASXMAXAXMASXSMMMSAAMMSMXMASMMMXAXAMXXXAAAASASMSSMSASXSXXMMSMMMSMMASAAXXMSAXSAMAAXXAMMS
XXXAAAAXXSMSMSXMMSMMASXSXMXSAMAMAXMXSMSSMASAMXSXMMAMMSAMXMAXAMMASXMAAXSMSXMAMXMAMASMMMMSSMSMSMSXMXMXAMAMXMAMASXXMAXMAXSMSMSSSXMMMMASMMMMXSAA
XMSSSSMSXMASAMASMMSSMMMMMMXMXSXMXSMAXMMXMAXAMXSMAMSMMMSMMMSSSMMASASMSASXMMSASXMASXMAAAAXXAAAAMXXXSMMXMMSAMXMAMAASXMXMMSAMAXAMXMXMSAMAASAAMXM
XMAXMAMMAMAMASAMAAAXXMAMAXAXAXAAAAMXSXXXSASAMAXMAMAAXAAXSAMXMAXAXAMAMMSAMXMASXSMSMSSMMSSMXMXXMMSAAAXMAMXAMAMXSMMMXAASXMAXSMSMSAAMXMXSAMMSSMS
SMMSSMMSMMSSMMMSMMSSSSSSSMMMMSMMSXMASMSMMAMAMMSSSSSXMSSSMMSMSSMSXAMAMXSAMXMSMAXAMXXAMXAAXXSSSMASXSMMMSMSXMXSMMXAXMSMSAMMMMAAASMSMAXMXXAAXMXA
XAXAAAAMAAAAXAXXMAXAAAAAXAAAMAXXMXXXXAASMAMSSMAXMAMXMAMMXAMAAAAMXMXXXAMAMXMAMAMMMSSSXMSSMAAAXMAMXMXXXAASXSXAASMMMMXASAMXAMMMXMAAXSMMAXMASMMM
SSMASMMXMMXMMMSMMMMMMMMMMSSMSMSXMASMMSMSXXXMAMXMMAMXMSXSXXSSMMAMAMMXMMSXMAMMMSSXAAXXAMXAXMMMMMXSXSSMMMSMAASMMMMAASMMSAMSSSMSMMSMMMAXAMMAAXAX
XMAMMAMXXMASAMAXAAAXMSMXMAXXMAXAMASXAMASMSSSMMMXXMXSAMAXXAMMSSMSASMXSAAXSASXSAMMMMSSXMMSMSAXXSAXAAMASXMMSMXMASMSMMAAXAMMAAAAAMXSAMAMXSXSSSSS
SAMXMAMSASASASXSSSMMMAAAMASMMMSSMXSMSMAMAAAAXASMMSAMAMAMAXMAAXXMASAAMMSMSASXMAMSAAAMASAXAMXMXMSSMMSAMAMAAXMXSXMXMSMMSXMMSMSSSMSMSSXMASXMXMMM
MMSMMMMMAMXMMMAMAMXASMXMSXXMAMAXAMMAMMMSSMSMMMAAXMAMXMMMMMMMSSSMXMMMMMAAXASXSAMXMMMSAMASXMAAAAMXAXMAMMMMSMXMMAMXMAMMAMXAXXXAAXXAXMAMXSASMXAM
MAAMAMAMMMXMASXMAMMXMXSMXASMSMMSMSMAMAAXAXAXAMMSMSAMMSAXAAXXXAXMXXMAMXASMXMXMXSXXMAMMSAMXSMSSSMSSMSMMSAMAAAMSAMAMAMXXAMXSAMXXAMXMMAMXSXMASAS
MSSSXSAXMAASAMAMASXSAMAMXSXAXXMAMAASMMMSMSMXMSXMXSASASASMSSMMMAMSSSMSXXMASXMMASXMMASAAMMXAAAAXMAMXAMASASAXXMAASASASAMMSMMXSSSMMASMMXXMAMMMMM
XAAAASAMMSMMASMMASXMASMXMMMMMMSMXMSMMXAXMAXAAXXMASXMMMMMAAXXASAAAAAASMMXSMSAMAMAXMSSXMMMSMMMSXMASXMSXSXMAMSXMXSASMSASXAAMAMMAMSASASXAXAMASXS
MMMMMMAMAXASXMAAMMASAMXAMXMSMAAAXSAMXMXMSAMMXMXMASMMAAMMMMMXXSMSMSMMMASMXMASMMSMMSASMXMASXXAXXSASXXAMMXMAMAAXMMXMASAMXMXMAXMAMMXSAMMMSMXASAA
SAMMSSMMMSAMXSXMMSAMAMSASAMAMSSSXMASXAXMAXSAAMMMXSASXSSXMASAAXMAMXAXXXMAXASXSXAXMAXMXMMASMMMMAMASMMMXAAXASMXMAASMMMSMMXMMMXSAMSAMAMXXAXMSMXM
SASAMAMAMXAAXMASXMAXXMAAMAXXXAMXMMAMMSAAAMSMXSAMSMXMAAXXSAMMAMXXMSSMMSSSMXMAMXMXXSASXSMASMAXMXMXMASAMMSMMSAASXMMAXSAXMASAAXSXMAMSMMXMAXXMASX
SAMXXMMAXMAMXSAMXSAMSMSSSMMSXMMASMMMAXSSSXMAMAMXAMAMMMMMMASAXXMAMAAAXAAAMXMAMSMXXXAXAAMAMMASXMSASXSXSAAASMXMSAMXXMSAXSASMSMSMXMXAAAXMSMMMMMM
MAMMSMSMSAMXMMXSMMMMAAAMAAAXAXMAMAXXSXAXXAMMMAMXASMXXXXXSAMXMMAMMSSMMXMAXAMAXAMXMMMMSMMSSMASAAMAMAMAMXXXMASXMAMXAXXXMMXSAAAXMAXSMXMXXXMAMAAX
SAMXAAAAXXSXSMAMAMSSMMMSMMMSMMMSSMMMMMMMMSXXMAMSXXMMSAMXXMMAMMSAMAXAMMSMSMSSSMSAAAMAXAMXAMSXMMMSMMMAMXMSMMMAMMSXSAMXXXMMMMXASXMAMSMSAMXSSSSS
SASXMSMSMMXAXMASXMAAAMXSXMMXMXAAXMAASAXMAMMXMAMSMSMASAMASMSXMAMXMMXAMAAMAAMAAXSXSSXSSSMXSMMXSXAXAMSAMXXAAXSSMAMMXASMSSSMSSXXAMXAMAAAAMAAAAXX
SSMAXXAXAXMSMSAMXMXSMSAMAMMAMMMSXSMSXMSMASMAXSXMAAMMSAMXSAAXMSSMASMMMSSSMSMSMMMMMMMMAAMMXAMAMASMMMMASMSSSMAMMXMAXAMXAAAAAAMXMAMXMMSSMMXSMAMS
SMSSMMXMXMAMAMMSMSXAXMASXMXASAMXAMXXMAAMASMAXMAMSMSXSMMAMMMMXMAXMAAXXAAMXAXASAAAXAAMMMMAMAMSMAXAMSSMMAAAAMXMXSMSMSMMSMMMMSMMSXMASXMAAXAMMSXA
MAAMAMSASMXMSAXAAXSXMSAMASXMSXSMSMAMASASASMXXMAMMAXAMAMXSXXMSAMXMXMMMMMMSMXAMSXMMXSSMSMXXAMXMMSSMXAAASMSMMXMMMAXXXAXXXXXAAAXAAMASASXMMMSAMAM
MMMSAAMAMAAAXSSMSMMMMMAMAMAXXAAAAMAMMMXMMSMXMSMMMMMMSAMSAAXSXMAMSMXXAMAMASMSMMMSSSXXAAASMSXSAMXMXXSMMXXXMSMMAMXMXSXMXMMMXXXMMMMASXMMSSXMAXSX
AMXMMMMAMXMMMAXXAAMASXMMMSAMMMMXMMAMXXXMAMXAXAAAXMAXXXSAMMMMAMSMAASMMSXXAXXMAXAXSASMSMXMMMAMMXAMSMMSSXSAAMAXMXAXXAXXASASXSMAAXSXMASAAXMSSMMM
AAMXSXMAXAAAXMXSSXSAMMAMXAAMMAAMSSXSAASMSSSSSXMSSSMSXXAAMSXSAMAMMSMAAAXMSMMMAMSMSMSXXMXSAMXMSMSXXAMASXMXMSSMMSSSMSMSMSASAASXMMMASAMMSSMAAAXA
MAXASXMAMMMSSXAMMMMMMSAMXSMMSMMSAAAMMMAAXAAXSAAMXMASASMSMAXSASXSXMASMASMAXMMAMMASXMASAASMMMXMAXMSMMASXXAXAAAXAASAAAAMMMMMMMSAXSAMAXSXXMMXMMS
MMMXXAMSMSAAAMAAAAAXASXSXXSXMAXMMMMAMXMAMMMMXXXSAMSMAMXXMMMSAMXMAMXMMXXMMSXSMSMAMAMAMMXMMAXXMAMXAXMSSMMMMMXSMMSMMMSXSSXSXMAXSMMXSSMMMSSSMSAX
SASMSSMAAXAMXMSSSSSSMMMMAAMMMXMAMXXMXMXXSXSXMMMMAMXMXMMMAXAMAMMSAMAXMMMSXSMXAAMMSMMXSXXMSMSAMAMSASXXXMAMXMAMXMAXXXMXAMAXSMMSMMMAMXAASAAAAMAS
SASAAXMMSMSSXXXAXMAMXMAMMMMXAAMSMMXSAMXMMMSAMXASXMSMSASXMMSSSSXMASMMSAAAAXAMSMMXAXMSMMXAAAXMASXSAXAAXMAXXXXMAMXXXAXMMMAMMXMAAASASXSMMMXMMMXM
MAMMMSSSXAAAMAMMSMAMASASAXXMASXXAXXSASAXXASAMMXSAAAAMMAMXSAAMAASMMMXSXSMSMSXXASXMSXAAXMMMMXMAMXMAMSMSMSXSAMAASXSMXSAAMMMXAXSXMSMSMAMMSXAASMM
AXXXAAXMMMMSMMAXAXXXXMASMSXAAXAXMMMSAMXMMXSAMXAXMSMSMMMMMMMXMSMMSAMXMAMAMAMXSMMAAXXMXMSXXMASXMSMSMAAXMAAMAMSMMMXMMMXMMASMMMMSXSMXMMMAMSSMSAX
XMASMMXMAAXAMXSXMSSMAMMMMSMSSSSMAAAMXMAXSASAMMSSMAAAXAXASXMSXXMAXXMAMAMMMMSAMXSAMSMSAAXAMSAMAAAAAXMSMSMXMXMXAXMXMASASMASAAASAMXSXAXMAMXMASMM
XXXXAXXMXXSASAMSXAAAXXMAMXAMMAAMSXSXSXMXMAMAMXMAMMXMMSXXSAAAASXSMSSXSXSAAMSAMXAXXAAMMSMMMMASMMMMMSSMAAXAAXMMMMSASXXASXASXMMSAXASMMMSXSMMXMAS
SMMSMMMSAAMXMASAXMSMMMMMMMSMMMMMMMMXSASXMSSSMASXMSAMXXMMMMMMAXAAXAAAXXMMMMSMMSMMSMSMAMAMXSAMXSMSAXAASMSSSMSAAXSASAMSMMMSAMXSAMASXSAMMAMXMSMM
XAMASXAMMSMSMXMMSMXMASAAAAXMAXSAXAMAMMMAAAMAXASMASXMAXAAXXMSSMSMMMSSSSXSXASMAAAAMXXMMSAMXMASXAAMMSSMMXAAAASMMMMMMMMAAAAMAMAXSAMSMMASXMSAMAAX
XXMAXMSXXXASMXMASAAXASXSMXSSMSMXSXMASASMMMSSMMSMMMAMMSMMSAAAXMAXAXAMAXAMMMMMSSXSXMMMASAMXMXSMMXMAAMAXXMMMMSAASASAASXSMMSAMXSAMXMAXAMAXSASMXS
SSMSMAAMXXAMMSMAMXASMSXMAMXAMMMMSXSXXAXXAXAXAXXAASXSAMXAXMMMSSMSSMMSMMMMXMAXAAAXXSAMMSXMAMAXMASMMSSMMSMXSXMMMSASAMAXXMXSASXMMMSSMMSSMMMAMXMA
XAAMMSMSSMXMXAXMMMXMASAMXXSAMXAAMASAMSMSSSMSXMSSMSAMAXMSSXAAAAMAAAAMXSAAASMSMMMMASMMXXAXAMSSSXXSXMAXAMXAMAMSMMMMMMSMMXAMMXAXXAXAXAAAXAMSMSAM
SMMMAMAAXAASMMMXASASAMXMSASMXSMXMAXAAAAXMAAAXMAMXMMMSXMMSXMASXMSSMMSASMSMAAAXXAMXMAXSSMMSSMAXXAMSXXASMMXSAMXSAMXXAXAMMMSMSMMMMSMMMSMMMXXASMX
XXAMXMMMSSMSAMXSMSASMMAASXXXASMSMSMMMXMXXXAMXSASAXAAAASXSXMAMXAAAMXMASAAMMSMSSXSXMXMAAAAMMMMMMSMAMMMMSAMSAMXSMMXMXSAMXMAMAAAXXAXXAAAMMMMAMXA
SSSSMSSXXAXSAMAMAMAMASMXMMAMMSASAMXSSSMXXXASXSAMMXMMXXMAXAXAMSMMXMXAMXXXXAAXAXMMASAASXMXSAXXXAAXMAAAAMMXMASMMXSXMMSMXAMASMMMMSASMSSSMSAMXMXS
AAAAASAMSSMSAMXMASXSMXXAAAAAXMAMAMAMAAMAXSAXAMASMSSSMMMMMXMAXAAAMSAMASXMMSSSMSASAMMMMAMMSXMAXSASXSSMSSXXSAMAMXSAMAMASMSASMMSAMAMAXAAASASAMAX
MMMMMMAMAMMSAMXSAMMAMXSSSMSAMXAMAMMMSMMAMMXMXMMMAAAAAAAAAASMMMMMAAAAAAAAAAAAAAXMASXASAMAXMASMMAAMAAAAMAMMASAMASAMASMXAAMSAMMASAMMMSMMSSMAMAS
XMSXMSAMXSMSAMXMMSAMXMAAXAMAXSMSXXSAMXMXSSXAXAXMXMMMSSSMMMSXAXXXASAMXSSMMSSMMMSSXMAXSSMMSSSXXMSMSSMMMMXMAXSAMMSMSXSXMSMSSMMSAMMAMXXAXMMSSMAS`;

export const inputs = {
    part1: {
        exampleInput: exampleInput,
        givenInput
    },
    part2: {
        exampleInput: exampleInput,
        givenInput
    }
};