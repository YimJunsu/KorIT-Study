package model.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class WaitingDto {
    private int wno;
    private String name;
    private String people;
    private String phnum;
    private boolean status;
}
