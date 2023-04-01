﻿NDSummary.OnToolTipsLoaded("File:UD_OrgasmManager.psc",{18:"<div class=\"NDToolTip TFile LPapyrus\"><div id=\"NDPrototype18\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Scriptname UD_OrgasmManager <span class=\"SHKeyword\">extends</span> Quest conditional</div></div><div class=\"TTSummary\">Contains functions for manipulating orgasm related variables and other manipulation functions</div></div>",20:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype20\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> Property UD_OrgasmResistence = <span class=\"SHNumber\">3.5</span> auto hidden</div></div><div class=\"TTSummary\">Default orgasm resistence</div></div>",21:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype21\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> Property UD_UseOrgasmWidget = True auto hidden</div></div><div class=\"TTSummary\">If orgasm widget should be shown</div></div>",22:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype22\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> Property UD_OrgasmUpdateTime = <span class=\"SHNumber\">0.2</span> auto hidden</div></div><div class=\"TTSummary\">Orgasm update time. Only used by Player. NPC have sepperate global variable</div></div>",23:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype23\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> Property UD_OrgasmAnimation = <span class=\"SHNumber\">1</span> auto hidden</div></div><div class=\"TTSummary\">Orgasm animation list.</div></div>",24:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype24\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> Property UD_OrgasmDuration = <span class=\"SHNumber\">20</span> auto hidden</div></div><div class=\"TTSummary\">Duration of orgasm.</div></div>",25:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype25\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> Property UD_HornyAnimation = <span class=\"SHKeyword\">true</span> auto hidden</div></div><div class=\"TTSummary\">If horny animations can play while actor is aroused</div></div>",26:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype26\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> Property UD_HornyAnimationDuration = <span class=\"SHNumber\">5</span> auto hidden</div></div><div class=\"TTSummary\">Duration of horny animation. Requires UD_HornyAnimation to be enabled first</div></div>",27:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype27\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Int Property UD_OrgasmArousalReduce = <span class=\"SHNumber\">25</span> auto hidden</div></div><div class=\"TTSummary\">How much will be arousal rate reduced per second on orgasm</div></div>",28:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype28\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Int Property UD_OrgasmArousalReduceDuration = <span class=\"SHNumber\">7</span> auto hidden</div></div><div class=\"TTSummary\">How long will UD_OrgasmArousalReduce last</div></div>",29:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype29\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Faction Property OrgasmFaction auto</div></div><div class=\"TTSummary\">Faction to which will ba actor added for duration of orgasm</div></div>",30:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype30\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Faction Property OrgasmResistFaction auto</div></div><div class=\"TTSummary\">Faction to which will ba actor added if they are in resist orgasm minigame</div></div>",31:"<div class=\"NDToolTip TVariable LPapyrus\"><div id=\"NDPrototype31\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> Property Ready auto conditional</div></div><div class=\"TTSummary\">Will be toggled to True once script is ready</div></div>",33:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype33\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Int Function UpdateArousal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor ,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">aiDiff</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",34:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype34\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Int Function getArousal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Faster version of &lt;getActorArousal&gt; which uses faction.</div></div>",36:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype36\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function UpdateArousalRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor ,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">fArousalRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdateArousalRate</div></div>",37:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype37\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function getArousalRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See getArousalRate</div></div>",38:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype38\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function getArousalRateM(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See getArousalRate</div></div>",39:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype39\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function UpdateArousalRateMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor ,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">fArousalRateM</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdateArousalRateMultiplier</div></div>",40:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype40\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function getArousalRateMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See getArousalRateMultiplier</div></div>",42:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype42\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function UpdateOrgasmRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor ,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">orgasmRate,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">orgasmForcing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdateOrgasmRate</div></div>",43:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype43\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorOrgasmRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See GetOrgasmRate</div></div>",44:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype44\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorAfterMultOrgasmRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See GetOrgasmRate</div></div>",45:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype45\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorAfterMultAntiOrgasmRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See GetAntiOrgasmRate</div></div>",46:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype46\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorOrgasmForcing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See getActorOrgasmForcing</div></div>",47:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype47\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function UpdateOrgasmRateMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor ,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">orgasmRateMultiplier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdateOrgasmRateMultiplier</div></div>",48:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype48\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorOrgasmRateMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See GetOrgasmRateMultiplier</div></div>",49:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype49\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function UpdateOrgasmResist(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor ,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">orgasmResist</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdateOrgasmResist</div></div>",50:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype50\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorOrgasmResist(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See GetOrgasmResist</div></div>",51:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype51\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorOrgasmResistM(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See GetOrgasmResist</div></div>",52:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype52\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Float Function UpdateOrgasmResistMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor ,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">orgasmResistMultiplier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdateOrgasmResistMultiplier</div></div>",53:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype53\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorOrgasmResistMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See GetOrgasmResistMultiplier</div></div>",54:"<div class=\"NDToolTip TFunction LPapyrus\"><div class=\"TTSummary\">See &lt;getActorOrgasmProgress&gt;</div></div>",55:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype55\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getOrgasmProgressPerc(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See getOrgasmProgressPerc</div></div>",56:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype56\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Int Function UpdatetActorOrgasmCapacity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">fValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdatetActorOrgasmCapacity</div></div>",57:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype57\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> Function getActorOrgasmCapacity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See getActorOrgasmCapacity</div></div>",59:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype59\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Function ActorCanOrgasm(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if actor can orgasm with current orgasm values. This assumes full (100) arousal</div></div>",60:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype60\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Function ActorCanOrgasmHalf(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if actor can orgasm with current orgasm values. This assumes half (50) arousal</div></div>",61:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype61\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Function startOrgasm(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName\">akActor,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">duration,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">iArousalDecrease</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">10</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">iForce</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">blocking</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See Orgasm</div></div>",62:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype62\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Function isOrgasming(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if actor is currently orgasming</div></div>",63:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype63\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Int Function getOrgasmingCount(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Number of orgasm the actor currently have (in case actor orgasm again before previous orgasm ends)</div></div>",64:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype64\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Int Function GetOrgasmAnimDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get remaining duration of orgasm animation</div></div>",65:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype65\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Int Function PlayOrgasmAnimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">aiDuration</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Plays orgasm animation for aiDuration</div></div>",66:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype66\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> Function GetOrgasmExhaustion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName last\">akActor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get numer of orgasm exhaustions</div></div>",67:"<div class=\"NDToolTip TFunction LPapyrus\"><div id=\"NDPrototype67\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Function UpdateBaseOrgasmVals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Actor&nbsp;</td><td class=\"PName\">akActor,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">aiDuration,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">afOrgasmRate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">afForcing</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0.0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">afArousalRate</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0.0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See UpdateBaseOrgasmVals</div></div>"});