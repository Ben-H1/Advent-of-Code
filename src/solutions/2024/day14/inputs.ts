const exampleInput = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`;

const givenInput = `p=80,58 v=-80,-45
p=80,4 v=-4,-91
p=40,2 v=29,39
p=38,45 v=3,-25
p=95,68 v=82,33
p=75,37 v=44,-31
p=53,27 v=-20,-99
p=47,11 v=-75,93
p=11,14 v=-37,-22
p=3,43 v=76,60
p=21,50 v=-3,-23
p=41,6 v=23,81
p=83,62 v=34,54
p=78,63 v=74,45
p=71,63 v=-58,-56
p=86,19 v=16,20
p=40,46 v=72,79
p=96,15 v=59,11
p=63,69 v=57,25
p=96,28 v=-7,29
p=36,63 v=17,32
p=1,40 v=-50,68
p=50,5 v=31,-74
p=70,61 v=87,31
p=43,71 v=75,-69
p=20,73 v=-93,-42
p=69,13 v=-79,81
p=68,90 v=19,-32
p=39,32 v=-52,-7
p=74,82 v=-27,24
p=36,1 v=8,61
p=12,6 v=-25,-77
p=92,96 v=-16,-12
p=49,59 v=50,-47
p=14,80 v=-25,-19
p=79,25 v=-79,88
p=67,61 v=13,-96
p=37,55 v=-47,-21
p=40,95 v=-6,32
p=92,88 v=-90,-22
p=35,79 v=52,-62
p=27,40 v=-22,-8
p=22,73 v=61,-27
p=44,84 v=-26,31
p=64,9 v=-47,38
p=82,87 v=-7,-45
p=36,40 v=-43,87
p=100,17 v=-68,-48
p=91,93 v=-53,-82
p=27,66 v=-66,67
p=65,66 v=-78,-18
p=65,75 v=34,67
p=96,71 v=88,84
p=73,75 v=-50,24
p=90,100 v=68,39
p=48,22 v=83,-33
p=79,80 v=-49,45
p=5,53 v=-9,-94
p=53,101 v=11,22
p=63,18 v=-18,2
p=31,98 v=-98,56
p=16,42 v=-83,-68
p=23,101 v=-69,99
p=72,102 v=-4,-21
p=27,87 v=-45,-10
p=22,49 v=21,-87
p=3,2 v=-11,-98
p=84,76 v=22,50
p=48,43 v=83,10
p=59,37 v=-18,40
p=23,24 v=-66,-49
p=4,88 v=-86,99
p=77,57 v=90,10
p=37,20 v=-49,-23
p=11,56 v=6,16
p=49,14 v=-32,12
p=55,86 v=2,58
p=37,79 v=-20,75
p=63,25 v=65,-79
p=81,92 v=96,-7
p=66,58 v=-66,37
p=11,17 v=-22,-47
p=63,7 v=37,21
p=57,17 v=-78,-5
p=84,7 v=74,-98
p=77,51 v=-12,15
p=90,95 v=22,-5
p=8,72 v=12,-70
p=35,81 v=3,23
p=66,96 v=80,56
p=29,87 v=-52,67
p=18,6 v=41,-55
p=25,0 v=10,84
p=93,49 v=-91,-69
p=12,19 v=9,-82
p=100,21 v=4,79
p=47,24 v=-93,98
p=89,52 v=-50,-56
p=20,54 v=18,-59
p=78,86 v=74,-30
p=61,80 v=40,15
p=79,35 v=-36,2
p=95,13 v=-56,2
p=57,11 v=-78,90
p=55,47 v=14,93
p=79,16 v=-53,-83
p=4,46 v=27,60
p=49,50 v=-6,-95
p=26,84 v=-41,-36
p=55,98 v=34,91
p=51,72 v=-23,94
p=19,53 v=-40,-99
p=69,102 v=83,3
p=68,27 v=-35,-64
p=30,64 v=53,-60
p=95,47 v=-16,-1
p=22,7 v=-92,21
p=3,78 v=1,41
p=34,97 v=-49,13
p=100,27 v=44,-16
p=76,53 v=37,-33
p=81,17 v=-10,37
p=21,36 v=9,19
p=3,57 v=79,-44
p=78,11 v=19,21
p=29,42 v=-23,70
p=85,61 v=-33,34
p=80,45 v=48,1
p=28,55 v=9,86
p=30,62 v=13,-30
p=83,71 v=74,48
p=78,17 v=-79,97
p=41,91 v=28,11
p=66,73 v=-67,-27
p=89,24 v=58,-34
p=84,102 v=76,70
p=43,98 v=-61,72
p=26,57 v=57,96
p=34,85 v=35,15
p=52,41 v=9,-76
p=4,15 v=59,36
p=82,21 v=42,-41
p=33,42 v=-66,-16
p=55,11 v=-90,4
p=5,87 v=76,31
p=43,0 v=6,-40
p=30,18 v=-95,3
p=47,75 v=-20,-20
p=19,85 v=12,40
p=94,60 v=-91,42
p=68,6 v=-30,-92
p=26,77 v=58,83
p=75,85 v=10,-83
p=65,48 v=-67,-60
p=39,94 v=-88,72
p=36,79 v=-98,75
p=36,96 v=-3,-72
p=23,86 v=99,99
p=93,22 v=-91,-23
p=12,17 v=-28,20
p=0,80 v=1,92
p=84,39 v=94,71
p=41,55 v=35,-8
p=83,46 v=-79,37
p=6,1 v=18,-81
p=34,22 v=87,-57
p=95,3 v=-16,24
p=36,66 v=-17,-60
p=68,22 v=-70,86
p=26,55 v=21,35
p=70,59 v=-70,68
p=95,66 v=6,-43
p=38,64 v=-26,24
p=92,12 v=-21,40
p=26,23 v=35,62
p=12,87 v=40,48
p=76,98 v=-15,2
p=37,14 v=-78,-65
p=20,67 v=-21,35
p=76,81 v=-53,6
p=40,79 v=-12,83
p=90,2 v=65,39
p=99,93 v=-59,81
p=7,92 v=-5,14
p=97,56 v=-80,34
p=68,69 v=-47,-10
p=48,8 v=-9,72
p=65,71 v=-33,89
p=85,32 v=2,45
p=32,101 v=-19,-26
p=46,26 v=-50,-54
p=10,46 v=-87,-86
p=15,54 v=49,57
p=20,15 v=41,-31
p=78,65 v=-56,59
p=32,38 v=-39,95
p=41,55 v=29,86
p=100,98 v=82,72
p=15,16 v=-34,30
p=17,1 v=38,64
p=45,29 v=20,-72
p=42,65 v=-90,82
p=23,30 v=-14,36
p=14,64 v=-31,-26
p=53,7 v=-26,-98
p=94,62 v=55,53
p=26,66 v=9,24
p=80,11 v=-75,48
p=32,56 v=9,43
p=26,69 v=-80,77
p=68,39 v=25,-50
p=24,85 v=13,-92
p=75,26 v=48,-93
p=42,26 v=69,28
p=62,98 v=11,-64
p=76,62 v=-39,94
p=56,30 v=-58,-92
p=91,58 v=33,51
p=38,2 v=-49,39
p=92,91 v=-39,-47
p=97,46 v=33,-16
p=39,37 v=-87,-86
p=71,86 v=-47,-55
p=4,17 v=53,97
p=39,73 v=17,-52
p=41,72 v=49,33
p=75,44 v=71,61
p=54,43 v=-58,-33
p=75,18 v=-53,-14
p=32,76 v=-2,76
p=18,30 v=-86,96
p=41,62 v=-72,9
p=73,74 v=-90,-19
p=1,35 v=56,-59
p=51,62 v=-96,-35
p=42,30 v=-26,19
p=89,9 v=22,-81
p=99,25 v=56,2
p=95,79 v=10,-54
p=17,100 v=90,64
p=97,18 v=81,29
p=31,78 v=-8,-45
p=27,31 v=73,4
p=1,31 v=93,52
p=89,2 v=-83,23
p=91,27 v=34,94
p=49,86 v=49,92
p=13,1 v=-5,-27
p=96,38 v=27,77
p=34,72 v=-58,-2
p=31,83 v=-69,-2
p=85,49 v=-44,59
p=32,24 v=52,-40
p=8,86 v=-88,-15
p=58,43 v=-60,-98
p=24,26 v=-63,-49
p=64,78 v=43,6
p=87,40 v=-30,-9
p=39,57 v=14,-27
p=61,66 v=-24,5
p=92,71 v=-88,-71
p=100,74 v=-97,-1
p=79,88 v=-58,6
p=41,22 v=-26,-58
p=35,88 v=72,24
p=48,90 v=-84,-12
p=0,62 v=1,50
p=76,50 v=-24,69
p=93,60 v=-13,-9
p=85,2 v=-13,13
p=16,47 v=21,-51
p=10,32 v=99,-15
p=94,95 v=-30,82
p=25,1 v=-26,-12
p=62,73 v=17,-34
p=36,39 v=-75,53
p=60,54 v=46,77
p=63,48 v=-77,-30
p=64,62 v=-21,75
p=63,99 v=-4,-90
p=75,99 v=-75,25
p=27,62 v=9,75
p=44,102 v=47,75
p=57,21 v=40,28
p=87,57 v=14,83
p=30,77 v=9,72
p=60,24 v=3,56
p=93,71 v=25,-71
p=41,7 v=3,-30
p=26,55 v=49,-86
p=49,20 v=-81,29
p=8,59 v=-5,8
p=97,56 v=98,8
p=53,102 v=-61,12
p=6,96 v=-2,-48
p=71,11 v=14,70
p=25,10 v=-17,72
p=43,78 v=-81,-19
p=70,61 v=-54,-45
p=55,99 v=-90,-21
p=55,6 v=-80,53
p=22,36 v=84,70
p=84,57 v=28,86
p=89,2 v=68,-90
p=6,72 v=-91,57
p=86,100 v=-13,65
p=97,31 v=-7,-16
p=55,58 v=40,42
p=65,59 v=-21,59
p=33,79 v=81,32
p=11,84 v=-60,58
p=60,85 v=-27,-54
p=36,8 v=-49,3
p=94,85 v=-71,-88
p=27,96 v=-46,-48
p=67,50 v=83,-26
p=99,53 v=96,-16
p=50,7 v=-32,-39
p=77,42 v=-13,8
p=97,99 v=-7,40
p=81,20 v=68,20
p=55,23 v=83,-83
p=48,4 v=-84,-65
p=10,1 v=61,-56
p=40,23 v=-59,-55
p=38,44 v=-96,-6
p=97,18 v=82,54
p=68,72 v=43,-61
p=61,31 v=-61,28
p=83,68 v=-59,84
p=46,77 v=-78,-79
p=72,102 v=-47,-4
p=72,61 v=-27,51
p=66,102 v=19,64
p=90,101 v=-27,39
p=44,73 v=-29,76
p=60,82 v=89,83
p=39,23 v=-87,2
p=4,87 v=-34,67
p=68,93 v=-33,-63
p=31,56 v=-88,-67
p=99,12 v=-66,52
p=11,58 v=50,-78
p=98,90 v=7,41
p=79,90 v=93,80
p=62,3 v=-18,-4
p=67,10 v=-56,-28
p=14,8 v=51,-76
p=48,51 v=46,-9
p=90,75 v=-40,-78
p=41,33 v=-55,-24
p=73,48 v=-50,56
p=57,26 v=66,11
p=51,80 v=5,50
p=80,99 v=65,-74
p=48,60 v=-49,95
p=13,49 v=-15,16
p=52,75 v=-36,-44
p=7,73 v=-22,7
p=63,22 v=-70,-6
p=97,99 v=-91,56
p=22,5 v=-89,-99
p=83,36 v=-4,60
p=16,30 v=79,44
p=34,70 v=48,56
p=38,10 v=-31,-68
p=26,17 v=3,12
p=19,78 v=67,-3
p=99,53 v=17,8
p=88,66 v=91,-95
p=34,99 v=-72,-89
p=30,19 v=52,63
p=23,31 v=97,-51
p=63,36 v=-67,-93
p=15,70 v=50,-63
p=25,19 v=-16,23
p=44,74 v=46,-27
p=21,51 v=12,-68
p=39,41 v=56,80
p=98,83 v=-79,-96
p=75,13 v=-50,72
p=33,64 v=41,58
p=38,25 v=23,62
p=39,97 v=-46,22
p=59,33 v=-1,-23
p=43,96 v=11,98
p=2,2 v=-48,-74
p=72,33 v=-82,86
p=77,60 v=-56,-61
p=6,73 v=2,-62
p=42,88 v=48,-6
p=68,82 v=77,76
p=86,60 v=-24,85
p=43,2 v=67,35
p=79,5 v=71,99
p=53,7 v=89,-73
p=26,71 v=13,-6
p=1,45 v=14,67
p=40,71 v=-85,-91
p=1,85 v=65,57
p=26,87 v=81,23
p=58,58 v=11,8
p=73,96 v=6,84
p=43,86 v=92,-37
p=7,27 v=-91,-6
p=30,45 v=-66,19
p=81,13 v=21,-2
p=16,16 v=55,-59
p=22,59 v=38,94
p=60,71 v=-15,25
p=98,16 v=-33,72
p=29,68 v=52,-43
p=53,31 v=98,-20
p=34,46 v=84,79
p=35,8 v=58,4
p=95,83 v=36,-88
p=18,99 v=44,18
p=75,83 v=-73,61
p=97,65 v=79,-54
p=56,76 v=66,91
p=59,32 v=79,-53
p=0,54 v=-22,26
p=14,23 v=-80,2
p=97,33 v=7,18
p=6,18 v=24,47
p=95,40 v=-65,1
p=92,8 v=-65,30
p=93,72 v=10,-71
p=77,51 v=65,70
p=57,39 v=-6,71
p=88,73 v=-76,-35
p=26,23 v=-14,28
p=39,26 v=41,-23
p=36,10 v=49,-91
p=74,4 v=-34,-74
p=88,83 v=25,-29
p=89,1 v=10,-82
p=73,38 v=84,26
p=37,42 v=26,60
p=4,61 v=7,78
p=54,101 v=17,99
p=16,3 v=74,27
p=96,51 v=-48,-51
p=55,94 v=-26,-73
p=80,4 v=-29,-31
p=89,57 v=4,-19
p=46,67 v=17,-35
p=92,16 v=85,-6
p=61,36 v=11,-59
p=80,97 v=62,-74
p=5,72 v=-28,-87
p=57,47 v=11,9
p=99,73 v=-34,63
p=66,84 v=-24,93
p=90,78 v=13,57
p=23,12 v=-86,-82
p=33,91 v=32,40
p=83,75 v=19,-11
p=76,39 v=-17,64
p=49,18 v=69,89
p=90,50 v=25,4
p=41,17 v=-23,-74
p=16,16 v=-86,54
p=55,48 v=34,-60
p=37,55 v=49,67
p=11,33 v=70,-93
p=82,36 v=-21,-34
p=76,29 v=23,-94
p=90,61 v=92,89
p=88,0 v=2,-67
p=20,52 v=21,95
p=49,41 v=-78,51
p=82,72 v=-33,57
p=99,3 v=34,50
p=17,101 v=12,-20
p=12,72 v=85,32
p=91,51 v=-94,69
p=23,43 v=-82,-13
p=64,34 v=-94,1
p=87,11 v=-52,-97
p=11,2 v=2,-59
p=12,49 v=9,27
p=84,28 v=-36,-41
p=64,62 v=43,8
p=27,98 v=12,-21
p=37,35 v=-86,23
p=53,31 v=-12,-16
p=100,2 v=27,99
p=17,24 v=-36,36
p=94,81 v=-30,40
p=76,0 v=62,65
p=72,48 v=-24,94
p=19,25 v=9,34
p=41,74 v=-52,-10
p=87,71 v=-22,67
p=61,44 v=60,63
p=47,61 v=-93,-19
p=0,82 v=-42,-45
p=83,43 v=-90,28
p=40,26 v=89,-93`;

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
