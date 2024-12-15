const exampleInput = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`;

const givenInput = `Button A: X+19, Y+50
Button B: X+58, Y+35
Prize: X=13287, Y=9100

Button A: X+74, Y+22
Button B: X+13, Y+46
Prize: X=5345, Y=7906

Button A: X+14, Y+29
Button B: X+45, Y+28
Prize: X=10893, Y=4468

Button A: X+47, Y+39
Button B: X+21, Y+86
Prize: X=3827, Y=9073

Button A: X+57, Y+13
Button B: X+19, Y+43
Prize: X=10000, Y=8952

Button A: X+19, Y+51
Button B: X+24, Y+13
Prize: X=12091, Y=18429

Button A: X+86, Y+36
Button B: X+25, Y+48
Prize: X=5199, Y=2364

Button A: X+11, Y+37
Button B: X+69, Y+24
Prize: X=8705, Y=19772

Button A: X+23, Y+78
Button B: X+61, Y+16
Prize: X=8392, Y=11282

Button A: X+23, Y+57
Button B: X+50, Y+19
Prize: X=17995, Y=2381

Button A: X+32, Y+67
Button B: X+56, Y+13
Prize: X=3920, Y=8654

Button A: X+62, Y+13
Button B: X+15, Y+51
Prize: X=5928, Y=12730

Button A: X+65, Y+24
Button B: X+17, Y+50
Prize: X=15284, Y=12172

Button A: X+61, Y+27
Button B: X+13, Y+92
Prize: X=1695, Y=5925

Button A: X+57, Y+13
Button B: X+32, Y+66
Prize: X=16874, Y=16216

Button A: X+87, Y+16
Button B: X+35, Y+48
Prize: X=3486, Y=1888

Button A: X+24, Y+49
Button B: X+52, Y+14
Prize: X=4956, Y=1999

Button A: X+80, Y+34
Button B: X+14, Y+96
Prize: X=1572, Y=4090

Button A: X+67, Y+35
Button B: X+11, Y+27
Prize: X=17181, Y=13277

Button A: X+68, Y+17
Button B: X+19, Y+53
Prize: X=12255, Y=14703

Button A: X+11, Y+78
Button B: X+86, Y+16
Prize: X=6330, Y=5628

Button A: X+43, Y+16
Button B: X+17, Y+61
Prize: X=4540, Y=13105

Button A: X+18, Y+41
Button B: X+44, Y+14
Prize: X=10626, Y=15897

Button A: X+64, Y+40
Button B: X+24, Y+50
Prize: X=12560, Y=6420

Button A: X+12, Y+71
Button B: X+76, Y+60
Prize: X=7728, Y=7147

Button A: X+13, Y+71
Button B: X+37, Y+12
Prize: X=17060, Y=959

Button A: X+90, Y+19
Button B: X+37, Y+87
Prize: X=8211, Y=9098

Button A: X+31, Y+64
Button B: X+59, Y+18
Prize: X=14330, Y=11946

Button A: X+46, Y+72
Button B: X+61, Y+18
Prize: X=5120, Y=4140

Button A: X+78, Y+11
Button B: X+18, Y+81
Prize: X=4424, Y=6508

Button A: X+81, Y+16
Button B: X+46, Y+97
Prize: X=2155, Y=3151

Button A: X+15, Y+85
Button B: X+95, Y+12
Prize: X=5515, Y=3356

Button A: X+35, Y+58
Button B: X+48, Y+24
Prize: X=10128, Y=16264

Button A: X+16, Y+40
Button B: X+38, Y+11
Prize: X=4080, Y=2808

Button A: X+18, Y+50
Button B: X+38, Y+18
Prize: X=9266, Y=15774

Button A: X+56, Y+95
Button B: X+80, Y+36
Prize: X=2384, Y=3446

Button A: X+90, Y+49
Button B: X+29, Y+68
Prize: X=5433, Y=5934

Button A: X+13, Y+37
Button B: X+59, Y+42
Prize: X=4468, Y=11593

Button A: X+11, Y+54
Button B: X+56, Y+17
Prize: X=7735, Y=8640

Button A: X+46, Y+26
Button B: X+23, Y+42
Prize: X=13440, Y=19218

Button A: X+38, Y+70
Button B: X+40, Y+16
Prize: X=4928, Y=5320

Button A: X+52, Y+24
Button B: X+34, Y+59
Prize: X=5560, Y=3952

Button A: X+48, Y+23
Button B: X+39, Y+65
Prize: X=11045, Y=8005

Button A: X+40, Y+57
Button B: X+69, Y+31
Prize: X=3050, Y=3673

Button A: X+53, Y+14
Button B: X+15, Y+42
Prize: X=1637, Y=8558

Button A: X+12, Y+55
Button B: X+96, Y+55
Prize: X=3648, Y=4400

Button A: X+12, Y+24
Button B: X+49, Y+11
Prize: X=10862, Y=2726

Button A: X+57, Y+11
Button B: X+34, Y+83
Prize: X=9402, Y=19518

Button A: X+20, Y+88
Button B: X+45, Y+11
Prize: X=1635, Y=5885

Button A: X+96, Y+77
Button B: X+74, Y+11
Prize: X=11378, Y=7337

Button A: X+56, Y+21
Button B: X+41, Y+93
Prize: X=7530, Y=7326

Button A: X+26, Y+83
Button B: X+97, Y+37
Prize: X=6407, Y=8729

Button A: X+22, Y+69
Button B: X+68, Y+12
Prize: X=3306, Y=5337

Button A: X+22, Y+56
Button B: X+52, Y+28
Prize: X=4674, Y=11624

Button A: X+67, Y+17
Button B: X+43, Y+61
Prize: X=6105, Y=6007

Button A: X+71, Y+16
Button B: X+14, Y+74
Prize: X=13001, Y=6776

Button A: X+12, Y+34
Button B: X+92, Y+77
Prize: X=6180, Y=6490

Button A: X+18, Y+95
Button B: X+73, Y+60
Prize: X=6677, Y=6290

Button A: X+78, Y+79
Button B: X+13, Y+54
Prize: X=7605, Y=10030

Button A: X+34, Y+11
Button B: X+27, Y+46
Prize: X=2583, Y=16736

Button A: X+82, Y+32
Button B: X+24, Y+63
Prize: X=3862, Y=4457

Button A: X+31, Y+52
Button B: X+31, Y+11
Prize: X=9229, Y=15378

Button A: X+80, Y+56
Button B: X+19, Y+85
Prize: X=1779, Y=7053

Button A: X+40, Y+99
Button B: X+52, Y+24
Prize: X=3020, Y=2763

Button A: X+69, Y+73
Button B: X+77, Y+19
Prize: X=5068, Y=2426

Button A: X+40, Y+27
Button B: X+12, Y+36
Prize: X=13716, Y=5237

Button A: X+59, Y+66
Button B: X+96, Y+28
Prize: X=4811, Y=3794

Button A: X+23, Y+77
Button B: X+64, Y+23
Prize: X=2629, Y=1151

Button A: X+56, Y+18
Button B: X+20, Y+67
Prize: X=11228, Y=14161

Button A: X+27, Y+56
Button B: X+62, Y+30
Prize: X=18764, Y=4088

Button A: X+39, Y+21
Button B: X+19, Y+56
Prize: X=9467, Y=9608

Button A: X+56, Y+17
Button B: X+38, Y+80
Prize: X=8160, Y=450

Button A: X+87, Y+56
Button B: X+11, Y+56
Prize: X=4251, Y=6552

Button A: X+50, Y+16
Button B: X+16, Y+41
Prize: X=9322, Y=19623

Button A: X+15, Y+13
Button B: X+15, Y+77
Prize: X=1335, Y=3205

Button A: X+71, Y+20
Button B: X+23, Y+69
Prize: X=3890, Y=5915

Button A: X+43, Y+11
Button B: X+23, Y+45
Prize: X=1724, Y=2364

Button A: X+32, Y+64
Button B: X+50, Y+19
Prize: X=6730, Y=12039

Button A: X+74, Y+74
Button B: X+16, Y+82
Prize: X=3484, Y=3814

Button A: X+45, Y+61
Button B: X+77, Y+17
Prize: X=5869, Y=3849

Button A: X+15, Y+58
Button B: X+36, Y+15
Prize: X=17309, Y=16825

Button A: X+31, Y+13
Button B: X+43, Y+64
Prize: X=17497, Y=18706

Button A: X+36, Y+20
Button B: X+22, Y+49
Prize: X=14960, Y=4260

Button A: X+83, Y+16
Button B: X+28, Y+33
Prize: X=2768, Y=644

Button A: X+34, Y+57
Button B: X+86, Y+33
Prize: X=3946, Y=4503

Button A: X+40, Y+23
Button B: X+21, Y+41
Prize: X=3339, Y=1734

Button A: X+21, Y+39
Button B: X+69, Y+35
Prize: X=3240, Y=2012

Button A: X+94, Y+41
Button B: X+31, Y+79
Prize: X=6219, Y=5921

Button A: X+57, Y+25
Button B: X+21, Y+81
Prize: X=3540, Y=1768

Button A: X+19, Y+39
Button B: X+47, Y+17
Prize: X=8452, Y=2712

Button A: X+62, Y+11
Button B: X+22, Y+72
Prize: X=18268, Y=17300

Button A: X+24, Y+17
Button B: X+31, Y+69
Prize: X=3805, Y=6976

Button A: X+71, Y+72
Button B: X+52, Y+12
Prize: X=8108, Y=5208

Button A: X+90, Y+40
Button B: X+29, Y+68
Prize: X=6533, Y=6596

Button A: X+82, Y+72
Button B: X+28, Y+90
Prize: X=5232, Y=11070

Button A: X+39, Y+11
Button B: X+18, Y+53
Prize: X=3725, Y=13252

Button A: X+22, Y+75
Button B: X+72, Y+60
Prize: X=6178, Y=6225

Button A: X+12, Y+32
Button B: X+46, Y+28
Prize: X=7044, Y=10280

Button A: X+29, Y+52
Button B: X+89, Y+46
Prize: X=6787, Y=7172

Button A: X+13, Y+58
Button B: X+63, Y+14
Prize: X=18178, Y=9492

Button A: X+53, Y+11
Button B: X+18, Y+55
Prize: X=3073, Y=3201

Button A: X+21, Y+55
Button B: X+47, Y+13
Prize: X=11898, Y=14142

Button A: X+14, Y+31
Button B: X+94, Y+29
Prize: X=3278, Y=1705

Button A: X+60, Y+27
Button B: X+13, Y+27
Prize: X=17258, Y=9926

Button A: X+53, Y+11
Button B: X+16, Y+80
Prize: X=1461, Y=7211

Button A: X+71, Y+35
Button B: X+15, Y+45
Prize: X=14538, Y=7800

Button A: X+93, Y+52
Button B: X+22, Y+80
Prize: X=2952, Y=6728

Button A: X+15, Y+40
Button B: X+64, Y+23
Prize: X=15387, Y=8214

Button A: X+26, Y+11
Button B: X+29, Y+39
Prize: X=17118, Y=8218

Button A: X+94, Y+33
Button B: X+28, Y+64
Prize: X=5800, Y=7074

Button A: X+15, Y+87
Button B: X+91, Y+25
Prize: X=7832, Y=6710

Button A: X+81, Y+84
Button B: X+79, Y+13
Prize: X=8309, Y=1862

Button A: X+56, Y+21
Button B: X+15, Y+41
Prize: X=18296, Y=18546

Button A: X+61, Y+37
Button B: X+16, Y+39
Prize: X=14435, Y=14063

Button A: X+54, Y+16
Button B: X+13, Y+26
Prize: X=4889, Y=3154

Button A: X+17, Y+55
Button B: X+41, Y+19
Prize: X=13333, Y=2043

Button A: X+11, Y+58
Button B: X+42, Y+11
Prize: X=14400, Y=5920

Button A: X+26, Y+70
Button B: X+88, Y+11
Prize: X=9778, Y=6896

Button A: X+12, Y+30
Button B: X+66, Y+26
Prize: X=7442, Y=5226

Button A: X+37, Y+20
Button B: X+12, Y+30
Prize: X=12787, Y=2760

Button A: X+11, Y+49
Button B: X+72, Y+14
Prize: X=13124, Y=13486

Button A: X+91, Y+26
Button B: X+13, Y+81
Prize: X=6916, Y=4681

Button A: X+73, Y+63
Button B: X+76, Y+11
Prize: X=5924, Y=3584

Button A: X+49, Y+99
Button B: X+59, Y+17
Prize: X=4246, Y=2242

Button A: X+17, Y+39
Button B: X+41, Y+28
Prize: X=8220, Y=12013

Button A: X+14, Y+40
Button B: X+78, Y+49
Prize: X=16276, Y=16697

Button A: X+22, Y+60
Button B: X+63, Y+27
Prize: X=7366, Y=2576

Button A: X+45, Y+80
Button B: X+97, Y+19
Prize: X=5891, Y=4642

Button A: X+39, Y+44
Button B: X+92, Y+22
Prize: X=7109, Y=1804

Button A: X+15, Y+37
Button B: X+80, Y+53
Prize: X=12840, Y=6633

Button A: X+50, Y+42
Button B: X+12, Y+60
Prize: X=744, Y=1224

Button A: X+41, Y+40
Button B: X+17, Y+68
Prize: X=2357, Y=2608

Button A: X+51, Y+20
Button B: X+46, Y+76
Prize: X=1787, Y=9072

Button A: X+49, Y+18
Button B: X+15, Y+55
Prize: X=11975, Y=14525

Button A: X+86, Y+11
Button B: X+26, Y+42
Prize: X=6308, Y=3282

Button A: X+17, Y+67
Button B: X+52, Y+13
Prize: X=6801, Y=18417

Button A: X+23, Y+77
Button B: X+65, Y+19
Prize: X=3004, Y=10292

Button A: X+41, Y+28
Button B: X+13, Y+42
Prize: X=857, Y=2142

Button A: X+90, Y+36
Button B: X+53, Y+94
Prize: X=8166, Y=6324

Button A: X+11, Y+54
Button B: X+50, Y+23
Prize: X=15285, Y=1602

Button A: X+17, Y+75
Button B: X+53, Y+13
Prize: X=8610, Y=19144

Button A: X+15, Y+97
Button B: X+87, Y+21
Prize: X=2094, Y=7042

Button A: X+20, Y+58
Button B: X+67, Y+29
Prize: X=8216, Y=8558

Button A: X+29, Y+72
Button B: X+51, Y+12
Prize: X=16786, Y=8408

Button A: X+73, Y+14
Button B: X+12, Y+44
Prize: X=5179, Y=5658

Button A: X+27, Y+16
Button B: X+15, Y+43
Prize: X=16682, Y=6087

Button A: X+74, Y+30
Button B: X+15, Y+46
Prize: X=10757, Y=3648

Button A: X+91, Y+47
Button B: X+53, Y+93
Prize: X=7531, Y=9271

Button A: X+60, Y+40
Button B: X+13, Y+37
Prize: X=906, Y=16994

Button A: X+24, Y+69
Button B: X+69, Y+14
Prize: X=320, Y=7970

Button A: X+43, Y+20
Button B: X+39, Y+67
Prize: X=4033, Y=2511

Button A: X+93, Y+26
Button B: X+36, Y+62
Prize: X=4734, Y=5738

Button A: X+38, Y+11
Button B: X+16, Y+31
Prize: X=2356, Y=7345

Button A: X+59, Y+30
Button B: X+26, Y+57
Prize: X=9702, Y=2309

Button A: X+36, Y+79
Button B: X+94, Y+33
Prize: X=5202, Y=6737

Button A: X+12, Y+51
Button B: X+64, Y+34
Prize: X=2036, Y=1451

Button A: X+56, Y+38
Button B: X+13, Y+77
Prize: X=3386, Y=6252

Button A: X+56, Y+16
Button B: X+48, Y+55
Prize: X=5792, Y=3843

Button A: X+32, Y+14
Button B: X+19, Y+36
Prize: X=10524, Y=11350

Button A: X+12, Y+38
Button B: X+60, Y+37
Prize: X=5540, Y=1437

Button A: X+17, Y+67
Button B: X+98, Y+44
Prize: X=1757, Y=4529

Button A: X+72, Y+35
Button B: X+11, Y+42
Prize: X=7286, Y=5842

Button A: X+23, Y+58
Button B: X+56, Y+11
Prize: X=7335, Y=9930

Button A: X+93, Y+40
Button B: X+47, Y+68
Prize: X=7908, Y=3688

Button A: X+49, Y+19
Button B: X+28, Y+35
Prize: X=4312, Y=2348

Button A: X+16, Y+73
Button B: X+94, Y+63
Prize: X=4520, Y=7451

Button A: X+99, Y+21
Button B: X+92, Y+88
Prize: X=6601, Y=4619

Button A: X+11, Y+73
Button B: X+71, Y+68
Prize: X=3561, Y=7908

Button A: X+29, Y+94
Button B: X+82, Y+36
Prize: X=6282, Y=5196

Button A: X+23, Y+76
Button B: X+55, Y+17
Prize: X=7538, Y=13970

Button A: X+73, Y+21
Button B: X+24, Y+74
Prize: X=14766, Y=1442

Button A: X+49, Y+16
Button B: X+12, Y+40
Prize: X=19125, Y=14096

Button A: X+24, Y+44
Button B: X+58, Y+31
Prize: X=11886, Y=5485

Button A: X+64, Y+17
Button B: X+37, Y+42
Prize: X=7945, Y=4845

Button A: X+79, Y+33
Button B: X+16, Y+56
Prize: X=13284, Y=13732

Button A: X+24, Y+40
Button B: X+47, Y+21
Prize: X=12979, Y=17185

Button A: X+45, Y+16
Button B: X+32, Y+64
Prize: X=4252, Y=2880

Button A: X+23, Y+43
Button B: X+66, Y+38
Prize: X=3109, Y=2057

Button A: X+83, Y+22
Button B: X+26, Y+43
Prize: X=3509, Y=2230

Button A: X+14, Y+51
Button B: X+62, Y+15
Prize: X=3562, Y=2433

Button A: X+19, Y+40
Button B: X+70, Y+44
Prize: X=9591, Y=10012

Button A: X+42, Y+85
Button B: X+74, Y+42
Prize: X=7474, Y=8768

Button A: X+33, Y+18
Button B: X+12, Y+46
Prize: X=12992, Y=17862

Button A: X+72, Y+36
Button B: X+16, Y+81
Prize: X=6752, Y=6588

Button A: X+52, Y+21
Button B: X+14, Y+47
Prize: X=8476, Y=6498

Button A: X+24, Y+92
Button B: X+75, Y+73
Prize: X=5238, Y=9354

Button A: X+14, Y+39
Button B: X+23, Y+15
Prize: X=3867, Y=12041

Button A: X+91, Y+15
Button B: X+63, Y+75
Prize: X=1694, Y=990

Button A: X+19, Y+56
Button B: X+50, Y+22
Prize: X=1765, Y=9240

Button A: X+38, Y+17
Button B: X+13, Y+37
Prize: X=15484, Y=5386

Button A: X+54, Y+38
Button B: X+14, Y+34
Prize: X=16032, Y=9952

Button A: X+79, Y+77
Button B: X+94, Y+15
Prize: X=12802, Y=6808

Button A: X+20, Y+51
Button B: X+18, Y+14
Prize: X=1204, Y=2496

Button A: X+13, Y+70
Button B: X+84, Y+27
Prize: X=9449, Y=6713

Button A: X+38, Y+50
Button B: X+74, Y+14
Prize: X=3158, Y=2738

Button A: X+20, Y+49
Button B: X+75, Y+39
Prize: X=2745, Y=8560

Button A: X+13, Y+53
Button B: X+99, Y+79
Prize: X=4853, Y=4853

Button A: X+26, Y+15
Button B: X+26, Y+62
Prize: X=4394, Y=7188

Button A: X+34, Y+59
Button B: X+44, Y+17
Prize: X=10974, Y=12503

Button A: X+21, Y+45
Button B: X+71, Y+38
Prize: X=13079, Y=7316

Button A: X+29, Y+53
Button B: X+46, Y+20
Prize: X=19082, Y=12008

Button A: X+17, Y+44
Button B: X+42, Y+15
Prize: X=3813, Y=4596

Button A: X+88, Y+98
Button B: X+98, Y+12
Prize: X=11076, Y=4758

Button A: X+78, Y+24
Button B: X+16, Y+60
Prize: X=13420, Y=7580

Button A: X+35, Y+73
Button B: X+39, Y+15
Prize: X=17166, Y=7816

Button A: X+73, Y+36
Button B: X+28, Y+76
Prize: X=4095, Y=5440

Button A: X+88, Y+25
Button B: X+75, Y+98
Prize: X=4727, Y=3567

Button A: X+85, Y+22
Button B: X+12, Y+69
Prize: X=15730, Y=12241

Button A: X+29, Y+81
Button B: X+62, Y+15
Prize: X=3192, Y=10505

Button A: X+15, Y+52
Button B: X+35, Y+12
Prize: X=6620, Y=12624

Button A: X+59, Y+16
Button B: X+21, Y+63
Prize: X=14306, Y=14336

Button A: X+62, Y+73
Button B: X+73, Y+12
Prize: X=10344, Y=6411

Button A: X+43, Y+14
Button B: X+18, Y+55
Prize: X=12196, Y=14786

Button A: X+38, Y+15
Button B: X+22, Y+36
Prize: X=3326, Y=3188

Button A: X+47, Y+94
Button B: X+82, Y+32
Prize: X=4858, Y=6284

Button A: X+81, Y+13
Button B: X+24, Y+50
Prize: X=8889, Y=3411

Button A: X+18, Y+54
Button B: X+69, Y+11
Prize: X=4511, Y=5601

Button A: X+60, Y+19
Button B: X+18, Y+64
Prize: X=10346, Y=11207

Button A: X+68, Y+36
Button B: X+11, Y+32
Prize: X=6686, Y=8752

Button A: X+17, Y+95
Button B: X+95, Y+27
Prize: X=7000, Y=3342

Button A: X+12, Y+95
Button B: X+61, Y+65
Prize: X=2104, Y=9970

Button A: X+36, Y+13
Button B: X+27, Y+40
Prize: X=8954, Y=13831

Button A: X+48, Y+28
Button B: X+14, Y+40
Prize: X=18854, Y=18160

Button A: X+60, Y+14
Button B: X+30, Y+80
Prize: X=3150, Y=7816

Button A: X+19, Y+62
Button B: X+53, Y+38
Prize: X=1039, Y=1906

Button A: X+60, Y+23
Button B: X+31, Y+72
Prize: X=16914, Y=17337

Button A: X+12, Y+47
Button B: X+65, Y+29
Prize: X=10808, Y=1101

Button A: X+11, Y+74
Button B: X+81, Y+15
Prize: X=7935, Y=12102

Button A: X+48, Y+14
Button B: X+22, Y+64
Prize: X=6400, Y=4284

Button A: X+45, Y+23
Button B: X+34, Y+66
Prize: X=10826, Y=6726

Button A: X+86, Y+46
Button B: X+25, Y+76
Prize: X=7789, Y=7736

Button A: X+60, Y+11
Button B: X+11, Y+49
Prize: X=2811, Y=6918

Button A: X+14, Y+35
Button B: X+75, Y+44
Prize: X=15433, Y=3244

Button A: X+32, Y+89
Button B: X+78, Y+28
Prize: X=8660, Y=7837

Button A: X+33, Y+15
Button B: X+22, Y+57
Prize: X=4104, Y=10262

Button A: X+75, Y+20
Button B: X+14, Y+60
Prize: X=3897, Y=6300

Button A: X+36, Y+39
Button B: X+16, Y+71
Prize: X=3072, Y=3972

Button A: X+37, Y+17
Button B: X+43, Y+65
Prize: X=18745, Y=19575

Button A: X+41, Y+24
Button B: X+19, Y+37
Prize: X=11480, Y=1557

Button A: X+11, Y+69
Button B: X+74, Y+24
Prize: X=14208, Y=16940

Button A: X+42, Y+16
Button B: X+49, Y+92
Prize: X=8155, Y=9340

Button A: X+58, Y+24
Button B: X+12, Y+39
Prize: X=15090, Y=9977

Button A: X+77, Y+51
Button B: X+20, Y+83
Prize: X=7801, Y=7399

Button A: X+17, Y+13
Button B: X+28, Y+85
Prize: X=1170, Y=2548

Button A: X+73, Y+12
Button B: X+22, Y+77
Prize: X=9612, Y=4289

Button A: X+45, Y+29
Button B: X+20, Y+45
Prize: X=12930, Y=2854

Button A: X+58, Y+25
Button B: X+15, Y+39
Prize: X=15621, Y=5007

Button A: X+31, Y+20
Button B: X+16, Y+72
Prize: X=1342, Y=1976

Button A: X+16, Y+53
Button B: X+30, Y+13
Prize: X=8288, Y=16351

Button A: X+42, Y+69
Button B: X+86, Y+36
Prize: X=10524, Y=7182

Button A: X+16, Y+67
Button B: X+46, Y+12
Prize: X=2154, Y=11963

Button A: X+12, Y+72
Button B: X+82, Y+16
Prize: X=18396, Y=3144

Button A: X+12, Y+25
Button B: X+23, Y+11
Prize: X=6003, Y=12505

Button A: X+33, Y+13
Button B: X+49, Y+77
Prize: X=10036, Y=14932

Button A: X+12, Y+64
Button B: X+55, Y+64
Prize: X=4129, Y=9408

Button A: X+69, Y+44
Button B: X+34, Y+75
Prize: X=6203, Y=4702

Button A: X+75, Y+37
Button B: X+14, Y+54
Prize: X=4878, Y=12182

Button A: X+63, Y+21
Button B: X+22, Y+58
Prize: X=8312, Y=2648

Button A: X+77, Y+56
Button B: X+15, Y+42
Prize: X=3954, Y=4368

Button A: X+23, Y+12
Button B: X+29, Y+49
Prize: X=3916, Y=8050

Button A: X+85, Y+51
Button B: X+11, Y+21
Prize: X=5339, Y=3405

Button A: X+74, Y+18
Button B: X+69, Y+73
Prize: X=12229, Y=7753

Button A: X+44, Y+20
Button B: X+20, Y+62
Prize: X=9824, Y=4034

Button A: X+11, Y+90
Button B: X+81, Y+71
Prize: X=584, Y=3003

Button A: X+20, Y+98
Button B: X+62, Y+69
Prize: X=5906, Y=9451

Button A: X+21, Y+53
Button B: X+34, Y+16
Prize: X=4635, Y=14485

Button A: X+43, Y+13
Button B: X+31, Y+48
Prize: X=7613, Y=6788

Button A: X+17, Y+44
Button B: X+55, Y+18
Prize: X=5441, Y=14586

Button A: X+34, Y+61
Button B: X+54, Y+22
Prize: X=8498, Y=16233

Button A: X+69, Y+28
Button B: X+14, Y+34
Prize: X=2486, Y=3246

Button A: X+82, Y+26
Button B: X+18, Y+43
Prize: X=3670, Y=2991

Button A: X+16, Y+51
Button B: X+50, Y+12
Prize: X=6538, Y=10334

Button A: X+69, Y+67
Button B: X+86, Y+15
Prize: X=7607, Y=2591

Button A: X+32, Y+67
Button B: X+94, Y+26
Prize: X=8418, Y=6864

Button A: X+24, Y+87
Button B: X+66, Y+63
Prize: X=3252, Y=9321

Button A: X+46, Y+11
Button B: X+18, Y+50
Prize: X=6712, Y=14780

Button A: X+18, Y+56
Button B: X+37, Y+13
Prize: X=14944, Y=9256

Button A: X+25, Y+11
Button B: X+19, Y+32
Prize: X=10880, Y=3470

Button A: X+37, Y+69
Button B: X+45, Y+15
Prize: X=13083, Y=3821

Button A: X+86, Y+64
Button B: X+19, Y+82
Prize: X=4891, Y=10358

Button A: X+35, Y+74
Button B: X+43, Y+12
Prize: X=4721, Y=17028

Button A: X+20, Y+73
Button B: X+27, Y+14
Prize: X=1389, Y=2787

Button A: X+60, Y+11
Button B: X+60, Y+57
Prize: X=8580, Y=4793

Button A: X+66, Y+75
Button B: X+88, Y+20
Prize: X=5588, Y=2590

Button A: X+74, Y+12
Button B: X+17, Y+77
Prize: X=16651, Y=17685

Button A: X+77, Y+48
Button B: X+12, Y+45
Prize: X=3721, Y=4083

Button A: X+51, Y+52
Button B: X+83, Y+13
Prize: X=9254, Y=3562

Button A: X+55, Y+19
Button B: X+25, Y+46
Prize: X=8165, Y=7946

Button A: X+75, Y+38
Button B: X+13, Y+48
Prize: X=9143, Y=16658

Button A: X+19, Y+47
Button B: X+61, Y+13
Prize: X=16485, Y=8185

Button A: X+31, Y+50
Button B: X+43, Y+22
Prize: X=8610, Y=17748

Button A: X+27, Y+79
Button B: X+54, Y+14
Prize: X=13652, Y=11012

Button A: X+99, Y+30
Button B: X+20, Y+97
Prize: X=2741, Y=4741

Button A: X+35, Y+64
Button B: X+70, Y+29
Prize: X=5845, Y=2570

Button A: X+74, Y+16
Button B: X+15, Y+63
Prize: X=11119, Y=15351

Button A: X+11, Y+50
Button B: X+42, Y+22
Prize: X=11855, Y=6958

Button A: X+47, Y+24
Button B: X+19, Y+49
Prize: X=4327, Y=2799

Button A: X+48, Y+16
Button B: X+26, Y+51
Prize: X=5644, Y=2786

Button A: X+90, Y+98
Button B: X+17, Y+79
Prize: X=8654, Y=10754

Button A: X+21, Y+73
Button B: X+67, Y+21
Prize: X=13546, Y=10698

Button A: X+55, Y+19
Button B: X+30, Y+58
Prize: X=7710, Y=3870

Button A: X+67, Y+34
Button B: X+13, Y+39
Prize: X=18114, Y=12244

Button A: X+24, Y+66
Button B: X+96, Y+75
Prize: X=7296, Y=9669

Button A: X+48, Y+19
Button B: X+21, Y+66
Prize: X=6887, Y=5589

Button A: X+28, Y+98
Button B: X+73, Y+58
Prize: X=2672, Y=8562

Button A: X+11, Y+24
Button B: X+34, Y+15
Prize: X=2989, Y=1961

Button A: X+12, Y+87
Button B: X+99, Y+92
Prize: X=10548, Y=16401

Button A: X+28, Y+56
Button B: X+28, Y+17
Prize: X=4032, Y=5373

Button A: X+53, Y+37
Button B: X+11, Y+96
Prize: X=5983, Y=12214

Button A: X+43, Y+14
Button B: X+34, Y+56
Prize: X=9956, Y=10532

Button A: X+88, Y+22
Button B: X+15, Y+29
Prize: X=2056, Y=716

Button A: X+53, Y+80
Button B: X+50, Y+17
Prize: X=4048, Y=2368

Button A: X+14, Y+42
Button B: X+86, Y+55
Prize: X=6736, Y=5795

Button A: X+26, Y+57
Button B: X+37, Y+15
Prize: X=19118, Y=2924

Button A: X+15, Y+75
Button B: X+79, Y+15
Prize: X=2502, Y=11270

Button A: X+70, Y+14
Button B: X+66, Y+98
Prize: X=11684, Y=9884

Button A: X+12, Y+31
Button B: X+69, Y+30
Prize: X=4808, Y=3812

Button A: X+83, Y+16
Button B: X+39, Y+99
Prize: X=8461, Y=9407

Button A: X+21, Y+38
Button B: X+56, Y+27
Prize: X=18218, Y=8914

Button A: X+56, Y+19
Button B: X+21, Y+57
Prize: X=9062, Y=10133`;

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