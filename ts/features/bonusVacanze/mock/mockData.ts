/**
 * This is just a temporary file to define utility types to develop Bonus section
 */

import { FiscalCode, NonEmptyString } from "italia-ts-commons/lib/strings";
import { BonusActivationStatusEnum } from "../../../../definitions/bonus_vacanze/BonusActivationStatus";
import { BonusActivationWithQrCode } from "../../../../definitions/bonus_vacanze/BonusActivationWithQrCode";
import { Dsu } from "../../../../definitions/bonus_vacanze/Dsu";
import { EligibilityCheckSuccess } from "../../../../definitions/bonus_vacanze/EligibilityCheckSuccess";
import { StatusEnum } from "../../../../definitions/bonus_vacanze/EligibilityCheckSuccessEligible";
import { FamilyMember } from "../../../../definitions/bonus_vacanze/FamilyMember";
import { MaxBonusAmount } from "../../../../definitions/bonus_vacanze/MaxBonusAmount";
import { MaxBonusTaxBenefit } from "../../../../definitions/bonus_vacanze/MaxBonusTaxBenefit";

export const svgBase64: string =
  "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjMyIiBoZWlnaHQ9IjIzMiIgdmlld0JveD0iMCAwIDIzMiAyMzIiCgkJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmV2PSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL3htbC1ldmVudHMiPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjMyIiBoZWlnaHQ9IjIzMiIgZmlsbD0iI2ZmZmZmZiIvPgo8ZGVmcz4KPHJlY3QgaWQ9InAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiLz4KPC9kZWZzPgo8ZyBmaWxsPSIjMDAwMDAwIj4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMzIiIHk9IjMyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjMyIiB5PSI0MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIzMiIgeT0iNDgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMzIiIHk9IjU2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjMyIiB5PSI2NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIzMiIgeT0iNzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMzIiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjMyIiB5PSI5NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIzMiIgeT0iMTQ0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjMyIiB5PSIxNTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMzIiIHk9IjE2MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIzMiIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjMyIiB5PSIxNzYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMzIiIHk9IjE4NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIzMiIgeT0iMTkyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjQwIiB5PSIzMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI0MCIgeT0iODAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNDAiIHk9Ijk2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjQwIiB5PSIxMjgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNDAiIHk9IjE0NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI0MCIgeT0iMTkyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjQ4IiB5PSIzMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI0OCIgeT0iNDgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNDgiIHk9IjU2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjQ4IiB5PSI2NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI0OCIgeT0iODAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNDgiIHk9IjEyMCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI0OCIgeT0iMTI4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjQ4IiB5PSIxNDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNDgiIHk9IjE2MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI0OCIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjQ4IiB5PSIxNzYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNDgiIHk9IjE5MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI1NiIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNTYiIHk9IjQ4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjU2IiB5PSI1NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI1NiIgeT0iNjQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNTYiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjU2IiB5PSIxMDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNTYiIHk9IjExMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI1NiIgeT0iMTI4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjU2IiB5PSIxNDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNTYiIHk9IjE2MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI1NiIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjU2IiB5PSIxNzYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNTYiIHk9IjE5MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI2NCIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNjQiIHk9IjQ4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjY0IiB5PSI1NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI2NCIgeT0iNjQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNjQiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjY0IiB5PSIxMDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNjQiIHk9IjExMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI2NCIgeT0iMTI4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjY0IiB5PSIxNDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNjQiIHk9IjE2MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI2NCIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjY0IiB5PSIxNzYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNjQiIHk9IjE5MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI3MiIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNzIiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjcyIiB5PSI5NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI3MiIgeT0iMTA0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjcyIiB5PSIxMTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iNzIiIHk9IjEyMCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI3MiIgeT0iMTQ0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjcyIiB5PSIxOTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iODAiIHk9IjMyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjgwIiB5PSI0MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI4MCIgeT0iNDgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iODAiIHk9IjU2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjgwIiB5PSI2NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI4MCIgeT0iNzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iODAiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjgwIiB5PSI5NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI4MCIgeT0iMTEyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjgwIiB5PSIxMjgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iODAiIHk9IjE0NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI4MCIgeT0iMTUyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjgwIiB5PSIxNjAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iODAiIHk9IjE2OCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI4MCIgeT0iMTc2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjgwIiB5PSIxODQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iODAiIHk9IjE5MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI4OCIgeT0iOTYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iODgiIHk9IjEwNCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI4OCIgeT0iMTEyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9Ijk2IiB5PSI1NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI5NiIgeT0iNjQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iOTYiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9Ijk2IiB5PSIxMjAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iOTYiIHk9IjEyOCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI5NiIgeT0iMTM2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9Ijk2IiB5PSIxNDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iOTYiIHk9IjE1MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSI5NiIgeT0iMTg0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9Ijk2IiB5PSIxOTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTA0IiB5PSIzMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMDQiIHk9IjQwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEwNCIgeT0iNDgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTA0IiB5PSI1NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMDQiIHk9Ijg4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEwNCIgeT0iOTYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTA0IiB5PSIxMTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTA0IiB5PSIxNDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTA0IiB5PSIxNzYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTA0IiB5PSIxODQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTEyIiB5PSIzMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMTIiIHk9IjU2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjExMiIgeT0iNjQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTEyIiB5PSI3MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMTIiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjExMiIgeT0iODgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTEyIiB5PSIxMjgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTEyIiB5PSIxNTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTEyIiB5PSIxNjAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTEyIiB5PSIxNjgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTEyIiB5PSIxNzYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTIwIiB5PSIzMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMjAiIHk9IjQwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyMCIgeT0iNTYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTIwIiB5PSI2NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMjAiIHk9Ijg4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyMCIgeT0iMTEyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyMCIgeT0iMTUyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyMCIgeT0iMTYwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyMCIgeT0iMTkyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTI4IiB5PSI2NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMjgiIHk9IjcyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iODAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTI4IiB5PSI4OCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxMjgiIHk9Ijk2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTA0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTM2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTQ0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTUyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTYwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTc2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTg0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEyOCIgeT0iMTkyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEzNiIgeT0iMTA0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEzNiIgeT0iMTIwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEzNiIgeT0iMTI4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEzNiIgeT0iMTQ0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEzNiIgeT0iMTUyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEzNiIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjEzNiIgeT0iMTg0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE0NCIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTQ0IiB5PSI0MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNDQiIHk9IjQ4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE0NCIgeT0iNTYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTQ0IiB5PSI2NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNDQiIHk9IjcyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE0NCIgeT0iODAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTQ0IiB5PSIxMDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTQ0IiB5PSIxMjgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTQ0IiB5PSIxNDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTQ0IiB5PSIxNTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTQ0IiB5PSIxNjgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTUyIiB5PSIzMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNTIiIHk9IjgwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE1MiIgeT0iMTA0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE1MiIgeT0iMTIwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE1MiIgeT0iMTYwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE1MiIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE1MiIgeT0iMTg0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE1MiIgeT0iMTkyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2MCIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTYwIiB5PSI0OCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNjAiIHk9IjU2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2MCIgeT0iNjQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTYwIiB5PSI4MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNjAiIHk9Ijk2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2MCIgeT0iMTA0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2MCIgeT0iMTI4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2MCIgeT0iMTc2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2MCIgeT0iMTg0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTY4IiB5PSI0OCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNjgiIHk9IjU2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iNjQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTY4IiB5PSI4MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNjgiIHk9Ijk2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iMTEyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iMTIwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iMTQ0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iMTUyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iMTY4Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE2OCIgeT0iMTg0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE3NiIgeT0iMzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTc2IiB5PSI0OCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjU2Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE3NiIgeT0iNjQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTc2IiB5PSI4MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjExMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjEyMCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjEyOCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjEzNiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjE1MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjE2MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjE2OCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjE3NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjE4NCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxNzYiIHk9IjE5MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxODQiIHk9IjMyIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE4NCIgeT0iODAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTg0IiB5PSIxMDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTg0IiB5PSIxMTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTg0IiB5PSIxMjAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTg0IiB5PSIxNDQiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTg0IiB5PSIxNjAiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTg0IiB5PSIxNzYiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTg0IiB5PSIxOTIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTkyIiB5PSIzMiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxOTIiIHk9IjQwIi8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE5MiIgeT0iNDgiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTkyIiB5PSI1NiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxOTIiIHk9IjY0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHg9IjE5MiIgeT0iNzIiLz4KPHVzZSB4bGluazpocmVmPSIjcCIgeD0iMTkyIiB5PSI4MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxOTIiIHk9IjEwNCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxOTIiIHk9IjE1MiIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxOTIiIHk9IjE2MCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwIiB4PSIxOTIiIHk9IjE3NiIvPgo8L2c+Cjwvc3ZnPg==";

export const pngBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAMLElEQVR4Xu3dQXLkVgwDUPv+h3Zqss7ouRpBfakb2dIkQRAQZbed+f75+fn52n9jYAz8JwPfM8iUMQb+zsAMMnWMgQsGZpDJYwzMINPAGHiNgV2Q13hb1ocwMIN8yKI35msMzCCv8basD2FgBvmQRW/M1xiYQV7jbVkfwsAM8iGL3pivMTCDvMbbsj6EgRnkQxa9MV9jYAZ5jbdlfQgDM8iHLHpjvsbADPIab8v6EAZig3x/f781Vemfy4gf1Ve+yG/XV//Tcc0vfDMIGIoJxgNE9WcQSfg6Ln5VfQaZQaSRR8dnkPL6YoJ3Qcob2gV5NsEzyLP3l/5NevqOfJS9XzTfBfkFSTf+knh/M0j5RO+CHLXPDFKmPyZ4BilvqPyAa1+QVGBtdvWKmOJX/XS+Nr60fjqf8sVvir/+Y94UoAhK43WCyx+kpvy250/3o/w2/hkkfAVKF6h8xWeQ69/kiPnZK1aZ4F0QeTyK74JE9Dm5TvAM4iUEX1Hf3y7ILsiVPtNXlED7v0qdQX5F0+tfVCd4F+T15fwis76/XZBdkF2QvzNw/KdYegL84iFy+SV6RVD/NF/4716/ja/Nj/Cr/wwS/phXBtMCtMDT9dv42vwIv/rPIDNI9QJLgIpL4HqAKF/9Z5AZZAa5YGAGmUFmkBnk4qcUM8gMMoPMIH9jIH2HV77e8RXX9xDqr3z13yvWLsguyC5I74LwCVQ2YPyELOMTP4prvl0QMYj4cYLLAtR8oi8VmPLVX3HNp/7KV/+9YoUCJsFh/boAyvjEj+ISeJ2f07+LpQFFoOLHCS4LUPOJH/Gv+spXf8XT/spX/12QUMAkOKwvAcYCKOMTP4prvjo/uyBnf5v3uABmkEuP7oKEAtETMH3Cpfmn8am/4scfILsguyBXIk0FKgMonvZXvvrvgpQvCBcQ9k8vTDtf8ysugaf41X8GCQUqghVPF3z3fM2v+Axy+G+2U4FpwYqn/e+er/kVn0FmkEuNtAXSNpgMoHh7fvXfK9ZesaoGlQAVn0F2QaoCbQtMF0gGULyNX/13QXZBqgaVABWfQXZBqgJtC2wXBBYXQVqQniDt+Kfj//T5pa/jr1gC2I5/ukA+fX7pawY5/D2IFqR4KvA0X/ja8Tb+GWQGib4HahtA9WcQMRTG2wSH8Jie4k/zCbD8BW38uyC7ILsgFwzMIDPIDDKD/J2B9okuv2F8pfjT/PZ8qt/GX78gGvDucX2Oky7o7vl334/waX/Kn0HAkAi+u8BT/BLQ3eOaX/hnkBlEGnl0fAYpr08E74KUFxCW1/5UfhdkF0QaeXR8BimvTwTvgpQXEJbX/lR+F2QXRBp5dHwGKa9PBO+ClBcQltf+VD6+IGrw7nEZRPNrge36wvfp8RkkVEBbwO364fhvnz6DhCtuC7hdPxz/7dNnkHDFbQG364fjv336DBKuuC3gdv1w/LdPn0HCFbcF3K4fjv/26TNIuOK2gNv1w/HfPn0GCVfcFnC7fjj+26fHBkkXKIbbnxOo/93jbX5UP+VH+mn3F/4ZRAzdPC4BSYAaT/WVr7jwtfsTX/ufYBMAxUWQCFb9p8fb/Kh+yp/21+4v/LsgYujmcQlIAtR4qq98xYWv3Z/4dkFE0b3jEpAEqOlUX/mKC1+7P/HNIKLo3nEJSALUdKqvfMWFr92f+GYQUXTvuAQkAWo61Ve+4sLX7k98M4goundcApIANZ3qK19x4Wv3J77UIGzw8H8gRwvU/Gn8tEBS/E/Pj3+KJQLaApOA1D/N1/xpXPjS+su/ZmAG+fm5ZEgGawtsBmkzPINcMiABziBnBXq6+y7ILshpDd66/wwyg9xaoKfBzSAzyGkN3rr/DDKD3Fqgp8HFBtE3sek3wXfPTxfY5k/4xK/yn46f86UfFLYJ0gJP9xfBirfxq7/4Vf7T8XO+GeQ7+jGwCFb86QJ7On7uZwaZQSSSq/gMAvbaBOkV4HT/RFx/ctv4hU/8Kv/p+DnfLsguiESyCxIw1H6C6Al3un9A3b+pbfzCJ36V/3T8nG8XZBdEItkFSRgKc/UEUnk9AVVf+ep/9/jT5z+NP/6gMBWICFB9CVz1la/+d48/ff7T+GcQ/KrJ3Q0gfKcFJnyKn8Y/g8wg0ujR+AwS/s26XpFOE3xUXf/DT8k+Hf8uyC7IaQ9c9j/9gJtBZpAZ5IKBGWQGmUGaBklPoPK1vfR7ENVXXP2Vn8bFX4ovra/8dP50PvWPL4gI0ADK1wDt+ml/5adx8Sd+1D+tr3z1VzydT/VnEDGEeHtBgicBpvjS+srXfIqn86n+DCKGZpBLBiTQGQSfY7QJbNeXf9Rf+WlcAkzxpfWVn86fzqf+uyBiaBdkFyTRiJ4Qcrjyha1dP+2v/DQu/sSP+qf1la/+iqfzqf4uiBjaBdkFCTXy0el6QuoJp3yRm9ZXvvorrvna/YVP8fiCqMG7x1MBKF/8SWCqr3z1V/x0f+FTfAYRQ4inAlC+4Engqq989Vf8dH/hU3wGEUMzSMTQDBLR9/zkVADKF0O6AKqvfPVX/HR/4VN8F0QM7YJEDM0gEX3PT04FoHwxpAug+spXf8VP9xc+xXdBxNAuSMTQxxtEBETs3iBZT9jT8wufKGzjT/Gl+NP+8QVpEyyC2nERfHp+4RM/bfwpvhR/2n8GwQZEcFtgEojwKb+NP8WX4k/7zyAziDQYxVOBqrkMnvafQWYQaTCKpwJV8xlEDJXjWrAWVIb3JXzq38af4kvxp/13QXZBpMEongpUzWXwtP8MMoNIg1E8FaiaP94gbYJEoOIpwcpX/9Nx7Ufzpfnt+YVP/esXJAWoAdL40wWQzq/9PJ0fzSf+ZpDD/1cWLagdl4BmEDGEDaUEtgWg+il+5av/6bjWr/nS/Pb8wqf+uyC7IJcamUFCi6UEysHteIpf+W38aX2tX/Ol+Sl+5Quf8ndBdkF2QS4YmEFmkBnkzgbRCdcJVFwnVv1P56fzKT+dX/XTuPCpvvan/OMXJCVAA4og9T+dn86n/HR+1U/jwqf62p/yZ5DyK5YWdFwA4fwSWBo/zs+PNogJNYDKKz8lOO1/Ol/zC5/yxX9aX/0VFz7lp/h3QcInqBaoBSm/LoBwfuFL48f52QX5vtxhKvA0XwJTfeVLgGl99Vdc+JSf4t8FCZ+gWqAWpPy6AML5hS+NH+dnF2QX5ErEMnhqAOXPIHiCiUDFtWAtQPnqr/rKT/urfhuf6mu+NF/zK75XrPIrhhasBUlAyle8jU/1NV+ar/kVn0FmEGnk1j/EkMGi4b6+vmaQGSTSkASaXoA0PxpuBvn6ai9A9bVACVD5irfxqb7mS/M1v+K7ILsg0shesRKGUocrP8H2J/f0EyqdT/hTftr4VF/zpfkxP/scJPscRAvQgpUvASlf8TY+1dd8ab7mV3yvWOEr1vEFhvglkDQuflT/tIFmkFBgEoAWLIEofrp/ik/54q89/wwyg0ijUVwCVvEZ5OG/aiIBaMESiOKn+6f4lC/+2vPvguyCSKNRXAJW8RlkF0QauYxLgBJY1PwXycKnEsKv+spX/12QXRBpJIpLwCougau+8tV/BplBpJEoLgGruASu+spX/+MGEcB2PCU4zW/Pp/rCr3zFY4GGr+Bx/9OfpIvgdlwCEcFpfns+1Rd+5Ssu/pSf4ov7zyDZr5pogemCJKA0Lvxp/XT+FF/cfwaZQVITXOXHAt0rVnM9rq0nlBac5hth9yuEP+0u/lQ/xRf33wXZBZFIk3gs0F2QhP48V08oLTjNzyfIKgh/Vt1/j6P6KT7tj/13QXZBJJIkHgv03S9IQu4dcrVgPeGUn86Y9ld+ii/NF3/Cr3zhq39QKAB3j4vg9oLET9pf+erfjp/mfwbBhk8vSAKUwFP86t+Op/iVL/wzyAwijRyNS+DpA0LDzSAziDRyND6DHKXfzU8vSAjTJ6jy1b8dP83/LsguSFvjUf0ZJKKvn3x6QZpQFyDFr/7teIpf+cIfXxA1WHwMPJmBGeTJ2xv2OgMzSJ3iNXgyAzPIk7c37HUGZpA6xWvwZAZmkCdvb9jrDMwgdYrX4MkMzCBP3t6w1xmYQeoUr8GTGZhBnry9Ya8zMIPUKV6DJzMwgzx5e8NeZ2AGqVO8Bk9mYAZ58vaGvc7ADFKneA2ezMAM8uTtDXudgX8A87nObDaQd4gAAAAASUVORK5CYII=";

export const familyMembers: ReadonlyArray<FamilyMember> = [
  {
    name: "Mario" as NonEmptyString,
    surname: "Rossi" as NonEmptyString,
    fiscal_code: "EFCMZZ80A12L720R" as FiscalCode
  },
  {
    name: "Giulia" as NonEmptyString,
    surname: "Rossi" as NonEmptyString,
    fiscal_code: "CDCMQQ81A12L721R" as FiscalCode
  },
  {
    name: "Piero" as NonEmptyString,
    surname: "Rossi" as NonEmptyString,
    fiscal_code: "ABCMYY82A12L722R" as FiscalCode
  }
];

const dsuData: Dsu = {
  request_id: "request_id" as NonEmptyString,
  isee_type: "isee_id",
  dsu_protocol_id: "dsu_protocol_id" as NonEmptyString,
  dsu_created_at: "2020-05-25T00:00:00.000Z",
  has_discrepancies: false,
  family_members: familyMembers,
  max_amount: 499 as MaxBonusAmount,
  max_tax_benefit: 30 as MaxBonusTaxBenefit
};

export const mockedElegibilityCheck: EligibilityCheckSuccess = {
  max_amount: 499 as MaxBonusAmount,
  max_tax_benefit: 30 as MaxBonusTaxBenefit,
  id: "d296cf6a-11f8-412b-972a-ede34d629680" as NonEmptyString,
  status: StatusEnum.ELIGIBLE,
  valid_before: new Date("2020-07-04T12:20:00.000Z"),
  ...dsuData
};

export const mockedBonus: BonusActivationWithQrCode = {
  id: "XYZ" as NonEmptyString,
  code: "ABCDE123XYZ" as NonEmptyString,
  qr_code: [
    {
      mime_type: "image/png",
      content: pngBase64
    },
    {
      mime_type: "svg+xml",
      content: svgBase64
    }
  ],
  applicant_fiscal_code: "ABCMYY82A12L722R" as FiscalCode,
  status: BonusActivationStatusEnum.ACTIVE,
  dsu_request: dsuData,
  updated_at: new Date("2020-07-04T12:20:00.000Z")
};

export const mockedAvailableBonusItem = {
  id: 1,
  name: "Bonus Vacanze",
  description: "descrizione bonus vacanze",
  valid_from: new Date("2020-07-01T00:00:00.000Z"),
  valid_to: new Date("2020-12-31T23:59:59.000Z"),
  cover:
    "https://gdsit.cdn-immedia.net/2018/08/fff810d2e44464312e70071340fd92fc.jpg"
};
