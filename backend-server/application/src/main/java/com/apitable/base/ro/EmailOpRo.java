/*
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.apitable.base.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * Mailbox verification code request parameters.
 */
@Data
@Schema(description = "Mailbox verification code request parameters")
public class EmailOpRo {

    @Schema(description = "Email", example = "...@apitable.com",
        requiredMode = RequiredMode.REQUIRED)
    @NotBlank(message = "Email cannot be empty")
    @Pattern(regexp = PatternConstants.EMAIL, message = "Incorrect email format", flags =
        Pattern.Flag.CASE_INSENSITIVE)
    private String email;

    @Schema(description = "SMS verification code type", type = "java.lang.Integer", example = "1",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Type cannot be empty")
    private Integer type;
}
