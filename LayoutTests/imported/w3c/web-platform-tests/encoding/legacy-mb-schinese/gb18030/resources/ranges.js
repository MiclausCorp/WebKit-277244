// Based on https://encoding.spec.whatwg.org/index-gb18030-ranges.txt
var ranges = [
	[0, "\u0080"],
	[36, "\u00A5"],
	[38, "\u00A9"],
	[45, "\u00B2"],
	[50, "\u00B8"],
	[81, "\u00D8"],
	[89, "\u00E2"],
	[95, "\u00EB"],
	[96, "\u00EE"],
	[100, "\u00F4"],
	[103, "\u00F8"],
	[104, "\u00FB"],
	[105, "\u00FD"],
	[109, "\u0102"],
	[126, "\u0114"],
	[133, "\u011C"],
	[148, "\u012C"],
	[172, "\u0145"],
	[175, "\u0149"],
	[179, "\u014E"],
	[208, "\u016C"],
	[306, "\u01CF"],
	[307, "\u01D1"],
	[308, "\u01D3"],
	[309, "\u01D5"],
	[310, "\u01D7"],
	[311, "\u01D9"],
	[312, "\u01DB"],
	[313, "\u01DD"],
	[341, "\u01FA"],
	[428, "\u0252"],
	[443, "\u0262"],
	[544, "\u02C8"],
	[545, "\u02CC"],
	[558, "\u02DA"],
	[741, "\u03A2"],
	[742, "\u03AA"],
	[749, "\u03C2"],
	[750, "\u03CA"],
	[805, "\u0402"],
	[819, "\u0450"],
	[820, "\u0452"],
	[7922, "\u2011"],
	[7924, "\u2017"],
	[7925, "\u201A"],
	[7927, "\u201E"],
	[7934, "\u2027"],
	[7943, "\u2031"],
	[7944, "\u2034"],
	[7945, "\u2036"],
	[7950, "\u203C"],
	[8062, "\u20AD"],
	[8148, "\u2104"],
	[8149, "\u2106"],
	[8152, "\u210A"],
	[8164, "\u2117"],
	[8174, "\u2122"],
	[8236, "\u216C"],
	[8240, "\u217A"],
	[8262, "\u2194"],
	[8264, "\u219A"],
	[8374, "\u2209"],
	[8380, "\u2210"],
	[8381, "\u2212"],
	[8384, "\u2216"],
	[8388, "\u221B"],
	[8390, "\u2221"],
	[8392, "\u2224"],
	[8393, "\u2226"],
	[8394, "\u222C"],
	[8396, "\u222F"],
	[8401, "\u2238"],
	[8406, "\u223E"],
	[8416, "\u2249"],
	[8419, "\u224D"],
	[8424, "\u2253"],
	[8437, "\u2262"],
	[8439, "\u2268"],
	[8445, "\u2270"],
	[8482, "\u2296"],
	[8485, "\u229A"],
	[8496, "\u22A6"],
	[8521, "\u22C0"],
	[8603, "\u2313"],
	[8936, "\u246A"],
	[8946, "\u249C"],
	[9046, "\u254C"],
	[9050, "\u2574"],
	[9063, "\u2590"],
	[9066, "\u2596"],
	[9076, "\u25A2"],
	[9092, "\u25B4"],
	[9100, "\u25BE"],
	[9108, "\u25C8"],
	[9111, "\u25CC"],
	[9113, "\u25D0"],
	[9131, "\u25E6"],
	[9162, "\u2607"],
	[9164, "\u260A"],
	[9218, "\u2641"],
	[9219, "\u2643"],
	[11329, "\u2E82"],
	[11331, "\u2E85"],
	[11334, "\u2E89"],
	[11336, "\u2E8D"],
	[11346, "\u2E98"],
	[11361, "\u2EA8"],
	[11363, "\u2EAB"],
	[11366, "\u2EAF"],
	[11370, "\u2EB4"],
	[11372, "\u2EB8"],
	[11375, "\u2EBC"],
	[11389, "\u2ECB"],
	[11682, "\u2FFC"],
	[11686, "\u3004"],
	[11687, "\u3018"],
	[11692, "\u301F"],
	[11694, "\u302A"],
	[11714, "\u303F"],
	[11716, "\u3094"],
	[11723, "\u309F"],
	[11725, "\u30F7"],
	[11730, "\u30FF"],
	[11736, "\u312A"],
	[11982, "\u322A"],
	[11989, "\u3232"],
	[12102, "\u32A4"],
	[12336, "\u3390"],
	[12348, "\u339F"],
	[12350, "\u33A2"],
	[12384, "\u33C5"],
	[12393, "\u33CF"],
	[12395, "\u33D3"],
	[12397, "\u33D6"],
	[12510, "\u3448"],
	[12553, "\u3474"],
	[12851, "\u359F"],
	[12962, "\u360F"],
	[12973, "\u361B"],
	[13738, "\u3919"],
	[13823, "\u396F"],
	[13919, "\u39D1"],
	[13933, "\u39E0"],
	[14080, "\u3A74"],
	[14298, "\u3B4F"],
	[14585, "\u3C6F"],
	[14698, "\u3CE1"],
	[15583, "\u4057"],
	[15847, "\u4160"],
	[16318, "\u4338"],
	[16434, "\u43AD"],
	[16438, "\u43B2"],
	[16481, "\u43DE"],
	[16729, "\u44D7"],
	[17102, "\u464D"],
	[17122, "\u4662"],
	[17315, "\u4724"],
	[17320, "\u472A"],
	[17402, "\u477D"],
	[17418, "\u478E"],
	[17859, "\u4948"],
	[17909, "\u497B"],
	[17911, "\u497E"],
	[17915, "\u4984"],
	[17916, "\u4987"],
	[17936, "\u499C"],
	[17939, "\u49A0"],
	[17961, "\u49B8"],
	[18664, "\u4C78"],
	[18703, "\u4CA4"],
	[18814, "\u4D1A"],
	[18962, "\u4DAF"],
	[19043, "\u9FA6"],
	[33469, "\uE76C"],
	[33470, "\uE7C8"],
	[33471, "\uE7E7"],
	[33484, "\uE815"],
	[33485, "\uE819"],
	[33490, "\uE81F"],
	[33497, "\uE827"],
	[33501, "\uE82D"],
	[33505, "\uE833"],
	[33513, "\uE83C"],
	[33520, "\uE844"],
	[33536, "\uE856"],
	[33550, "\uE865"],
	[37845, "\uF92D"],
	[37921, "\uF97A"],
	[37948, "\uF996"],
	[38029, "\uF9E8"],
	[38038, "\uF9F2"],
	[38064, "\uFA10"],
	[38065, "\uFA12"],
	[38066, "\uFA15"],
	[38069, "\uFA19"],
	[38075, "\uFA22"],
	[38076, "\uFA25"],
	[38078, "\uFA2A"],
	[39108, "\uFE32"],
	[39109, "\uFE45"],
	[39113, "\uFE53"],
	[39114, "\uFE58"],
	[39115, "\uFE67"],
	[39116, "\uFE6C"],
	[39265, "\uFF5F"],
	[39394, "\uFFE6"],
	[189000, "\u{10000}"]
];