import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Student } from "./students.entity";
import { Teacher } from "./teachers.entity";

@Entity("feedbacks")
export class Feedback {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 200, unique: true })
  feedback: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @ManyToOne(() => Teacher, { eager: true })
  teacher: Teacher;

  @ManyToOne(() => Student)
  student: Student;
}
